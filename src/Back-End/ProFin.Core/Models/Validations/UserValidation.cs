using FluentValidation;

namespace ProFin.Core.Models.Validations
{
    public class UserValidation : AbstractValidator<User>
    {
        public UserValidation()
        {
            RuleFor(f => f.FistName)
               .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório")
               .Length(2, 100)
              .WithMessage("O campo {Property Name} deve estar entre {MinLength} e {MaxLength} caracteres");

            RuleFor(f => f.LastName)
              .NotEmpty().WithMessage("O campo  {PropertyName} is required")
              .Length(1, 100)
              .WithMessage("O campo {Property Name} deve estar entre {MinLength} e {MaxLength} caracteres");

            RuleFor(f => f.Email)
            .EmailAddress().WithMessage("O campo {PropertyName} não é valido");

            RuleFor(f => f.Birthdate)
               .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório")
               .Must(birthdate => birthdate <= DateTime.Today.AddYears(-18))
              .WithMessage("O usuário de deve possuir mais de 18 anos");
        }
    }
}
