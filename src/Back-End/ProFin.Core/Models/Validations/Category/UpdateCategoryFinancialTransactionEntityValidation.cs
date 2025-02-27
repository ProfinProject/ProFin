using FluentValidation;

namespace ProFin.Core.Models.Validations
{
    public class UpdateCategoryFinancialTransactionEntityValidation : AbstractValidator<CategoryFinancialTransaction>
    {
        public UpdateCategoryFinancialTransactionEntityValidation(Guid userId)
        {
            RuleFor(c => c)
                .NotNull()
                .WithMessage("Registro não encontrado!");

            RuleFor(c => c.IsPattern)
                .Equal(false).WithMessage("Não é possível alterar uma categoria padrão do sistema");

            RuleFor(usuario => usuario.CreatedDate)
                .NotEqual(DateTime.MinValue)
                .WithMessage("A data de criação é inválida.");

            RuleFor(c => c.UserId)
              .Equal(userId).WithMessage("Este usuário não pode alterar esta categoria");
        }
    }
}
