using FluentValidation;
using ProFin.Core.Models;

namespace DevIO.Business.Models.Validations
{
    public class TransactionEntityValidation : AbstractValidator<TransactionEntity>
    {
        public TransactionEntityValidation()
        {
            RuleFor(c => c.Value)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .GreaterThan(0).WithMessage("O campo {PropertyName} precisa ser maior que {ComparisonValue}");

            RuleFor(c => c.Description)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido");

            RuleFor(c => c.CategoryTransaction)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido");
        }
    }
}