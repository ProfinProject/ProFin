using FluentValidation;
using ProFin.Core.Models;


namespace ProFin.Core.Models.Validations
{
    public class BudgetValidation : AbstractValidator<Budget>
    {
        public BudgetValidation()
        {
            RuleFor(b => b.CategoryTransactionId)
                .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório.");

            RuleFor(b => b.Limit)
                .GreaterThan(0).WithMessage("O campo {PropertyName} deve ser maior que zero.");

            RuleFor(b => b.Limit)
              .GreaterThanOrEqualTo(b => b.CurrentSpending).WithMessage("O limite deve ser maior ou igual que o gasto atual.");

            RuleFor(b => b.CurrentSpending)
            .GreaterThan(0).WithMessage("O campo {PropertyName} deve ser maior que zero.");
        }
    }
}
