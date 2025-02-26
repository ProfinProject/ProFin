using FluentValidation;

namespace ProFin.Core.Models.Validations.Category
{
    public class CategoryFinancialTransactionEntityValidation : AbstractValidator<CategoryFinancialTransaction>
    {
        public CategoryFinancialTransactionEntityValidation()
        {
            RuleFor(c => c.Name)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .MinimumLength(5).WithMessage("O campo {PropertyName} precisa ser maior que {MinLength} caracteres");

            RuleFor(c => c.Description)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .MinimumLength(10).WithMessage("O campo {PropertyName} precisa ser maior que {MinLength} caracteres");
        }
    }
}
