﻿using FluentValidation;

namespace ProFin.Core.Models.Validations.Transaction
{
    public class UpdateTransactionValidation : AbstractValidator<FinancialTransaction>
    {

        public UpdateTransactionValidation(Guid userId, bool isAdmin)
        {
            RuleFor(c => c)
                .NotNull()
                .WithMessage("Registro não encontrado!");

            if (!isAdmin)
            {
                RuleFor(c => c.UserId)
              .Equal(userId).WithMessage("Este usuário não pode alterar esta transação");
            }
        }
    }
}
