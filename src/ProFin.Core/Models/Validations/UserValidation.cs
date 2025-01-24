using FluentValidation;

namespace ProFin.Core.Models.Validations
{
    public class UserValidation : AbstractValidator<User>
    {
        public UserValidation()
        {
            RuleFor(f => f.FistName)
               .NotEmpty().WithMessage("The field {PropertyName} is required")
               .Length(2, 100)
               .WithMessage("The field {Property Name }should be between {MinLength} and {MaxLength} characters");

            RuleFor(f => f.LastName)
              .NotEmpty().WithMessage("The field {PropertyName} is required")
              .Length(1, 100)
              .WithMessage("The field {Property Name }should be between {MinLength} and {MaxLength} characters");

            RuleFor(f => f.Birthdate)
              .GreaterThan(DateTime.Now.AddYears(-18))
              .WithMessage("The field {PropertyName} is required");
        }
    }
}
