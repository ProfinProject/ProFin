using FluentValidation;

namespace ProFin.Core.Models.Validations.BudgetValid
{
    public class UpdateBudgetValidation : AbstractValidator<Budget>
    {

        public UpdateBudgetValidation(Guid userId)
        {
            RuleFor(c => c)
                .NotNull()
                .WithMessage("Registro não encontrado!");

            RuleFor(budget => budget.CreatedDate)
                .NotEqual(DateTime.MinValue)
                .WithMessage("A data de criação é inválida.");

            RuleFor(c => c.UserId)
              .Equal(userId).WithMessage("Este usuário não pode alterar esta categoria");
        }
    }
}
