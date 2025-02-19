using FluentValidation;

namespace ProFin.Core.Models.Validations
{
    public class TransactionEntityValidation : AbstractValidator<FinancialTransaction>
    {
        public TransactionEntityValidation()
        {
            RuleFor(c => c.Value)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .GreaterThan(0).WithMessage("O campo {PropertyName} precisa ser maior que {ComparisonValue}");

            RuleFor(c => c.Description)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido");

            RuleFor(c => c.CategoryFinancialTransaction)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido");
        }
    }
}