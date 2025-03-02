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

            RuleFor(c => c.UserId)
              .Equal(userId).WithMessage("Este usuário não pode alterar esta categoria");
        }
    }
}
