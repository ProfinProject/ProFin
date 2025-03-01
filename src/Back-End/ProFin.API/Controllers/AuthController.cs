using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ProFin.API.Extensions;
using ProFin.Core.Interfaces.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static ProFin.API.ViewModel.UserViewModel;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController(SignInManager<IdentityUser<Guid>> _signInManager,
                                UserManager<IdentityUser<Guid>> _userManager,
                                JwtSettings _jwtSettings,
                                IUserService _userService,
                                INotifier notifier) : MainController(notifier)
    {
        [HttpPost]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary), StatusCodes.Status400BadRequest)]
        [ProducesDefaultResponseType]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserViewModel model)
        {
            if (!ModelState.IsValid) return ValidationProblem(ModelState);

            //Valida primeiro que todos os dados obrigatorios foram informados, antes de gerar um usuario invalido no identity
            _userService.ValidateUser(Core.Models.User.Create(Guid.Empty, model.Email, model.FirstName, model.LastName, model.Birthdate));
            if (IsValid() == false) return CustomResponse(model);

            var user = new IdentityUser<Guid>
            {
                UserName = model.Email,
                Email = model.Email,
                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded == true)
            {
                await _userService.Create(Core.Models.User.Create(user.Id, user.Email, model.FirstName, model.LastName, model.Birthdate));
                await _signInManager.SignInAsync(user, false);
                return CustomResponse(await GetJwt(user.Email));
            }

            foreach (var error in result.Errors)
            {
                NotifieError(error.Description);
            }

            return CustomResponse(model);
        }


        [HttpPost]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary), StatusCodes.Status400BadRequest)]
        [Route("login")]
        public async Task<IActionResult> Login(LoginUserViewModel loginUser)
        {
            if (!ModelState.IsValid) return ValidationProblem(ModelState);

            var result = await _signInManager.PasswordSignInAsync(loginUser.Email, loginUser.Password, false, true);

            if (result.Succeeded)
                return CustomResponse(await GetJwt(loginUser.Email));

            if (result.IsLockedOut)
            {
                NotifieError("Este usuário está temporariamente bloqueado");
                return CustomResponse(loginUser);
            }

            NotifieError("Usuário ou senha incorretos");
            return CustomResponse(loginUser);
        }

        private async Task<LoginResponseViewModel> GetJwt(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            var userClaims = await _userManager.GetClaimsAsync(user);

            userClaims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Email, user.Email));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, user.Id.ToString()));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Nbf, ToUnixEpochDate(DateTime.UtcNow).ToString()));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(DateTime.UtcNow).ToString(), ClaimValueTypes.Integer64));

            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
                userClaims.Add(new Claim(ClaimTypes.Role, role));

            var identityClaims = new ClaimsIdentity();
            identityClaims.AddClaims(userClaims);

            var key = Encoding.ASCII.GetBytes(_jwtSettings.SecretKey);
            var handler = new JwtSecurityTokenHandler();
            var signingConf = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature);
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = _jwtSettings.Issuer,
                Audience = _jwtSettings.Audience,
                SigningCredentials = signingConf,
                Subject = identityClaims,
                NotBefore = DateTime.Now,
                Expires = DateTime.Now.AddMinutes(_jwtSettings.ExpirationHours)
            });

            var encodedJwt = handler.WriteToken(securityToken);

            var response = new LoginResponseViewModel
            {
                AccessToken = encodedJwt,
                ExpiresIn = TimeSpan.FromHours(_jwtSettings.ExpirationHours).TotalSeconds,
                UserToken = new UserTokenViewModel
                {
                    Id = user.Id.ToString(),
                    Email = user.Email,
                    Claims = userClaims.Select(c => new ClaimViewModel { Type = c.Type, Value = c.Value })
                }
            };

            return response;
        }

        private static long ToUnixEpochDate(DateTime date)
            => (long)Math.Round((date.ToUniversalTime() - new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero)).TotalSeconds);
    }
}