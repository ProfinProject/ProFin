using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ProFin.API.Extensions;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static ProFin.API.ViewModels.UserViewModel;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : MainController
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly JwtSettings _jwtSettings;
        // private readonly IUserService _userService;

        public AuthController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager, JwtSettings jwtSettings, INotifier notifier)
             : base(notifier)//, IUserService userService
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _jwtSettings = jwtSettings;
            //   _userService = userService;
        }

        [HttpPost]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary), StatusCodes.Status400BadRequest)]
        [ProducesDefaultResponseType]
        [Route("new")]
        public async Task<IActionResult> Register([FromBody] RegisterUserViewModel model)
        {
            if (!ModelState.IsValid) return ValidationProblem(ModelState);

            var user = new IdentityUser
            {
                UserName = model.Email,
                Email = model.Email,
                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded == true)
            {
                await _signInManager.SignInAsync(user, false);
                return Ok(await GetJwt(user.Email));
            }

            foreach (var error in result.Errors)
            {
                NotifieError(error.Description);
            }

            return CustomResponse(model);

            //   await _authorService.Create(CreateAuthorViewModel.Create(Guid.Parse(user.Id), model.FistName, model.LastName));


        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary), StatusCodes.Status400BadRequest)]
        [Route("login")]
        public async Task<IActionResult> Login(LoginUserViewModel loginUser)
        {
            if (!ModelState.IsValid) return ValidationProblem(ModelState);

            var result = await _signInManager.PasswordSignInAsync(loginUser.Email, loginUser.Password, false, true);

            if (result.Succeeded)
                return Ok(await GetJwt(loginUser.Email));

            if (result.IsLockedOut)
            {
                return Problem("This user is temporarily blocked");
            }

            return Problem("Incorrect user or password");
        }

        private async Task<LoginResponseViewModel> GetJwt(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            var userClaims = await _userManager.GetClaimsAsync(user);

            userClaims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.Id));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Email, user.Email));
            userClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
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
                    Id = user.Id,
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