using FluentValidation;

namespace ProFin.Core.Models.Validations.BudgetValid
{
    public class UpdateBudgetValidation : AbstractValidator<Budget>
    {

        public UpdateBudgetValidation(Guid userId, bool isAdmin)
        {
            RuleFor(c => c)
                .NotNull()
                .WithMessage("Registro não encontrado!");

            if (!isAdmin)
            {
                RuleFor(c => c.UserId)
                    .Equal(userId).WithMessage("Este usuário não pode alterar esta orçamento");
            }

        }
    }
}
