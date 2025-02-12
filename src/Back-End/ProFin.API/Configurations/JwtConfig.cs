using ProFin.API.Extensions;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


namespace ProFin.API.Configurations
{
    public static class JwtConfig
    {
        public static WebApplicationBuilder AddJwt(this WebApplicationBuilder builder)
        {
            var appSettingsSection = builder.Configuration.GetSection("AppSettings");
            builder.Services.Configure<JwtSettings>(appSettingsSection);

            var appSettings = appSettingsSection.Get<JwtSettings>();
            builder.Services.AddSingleton(appSettings);

            var key = Encoding.ASCII.GetBytes(appSettings.SecretKey);

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }
            )
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = true;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidAudience = appSettings.Audience,
                        ValidIssuer = appSettings.Issuer
                    };
                });

            return builder;
        }
    }
}
