using FluentValidation;

namespace ProFin.Core.Models.Validations.Category
{
    public class UpdateCategoryFinancialTransactionEntityValidation : AbstractValidator<CategoryFinancialTransaction>
    {
        public UpdateCategoryFinancialTransactionEntityValidation(Guid userId, bool isAdmin)
        {
            RuleFor(c => c)
                .NotNull()
                .WithMessage("Registro não encontrado!");

            RuleFor(c => c.IsPattern)
                .Equal(false).WithMessage("Não é possível alterar uma categoria padrão do sistema");

            if (!isAdmin)
            {
                RuleFor(c => c.UserId)
                    .Equal(userId).WithMessage("Este usuário não pode alterar esta categoria");
            }
        }
    }
}
