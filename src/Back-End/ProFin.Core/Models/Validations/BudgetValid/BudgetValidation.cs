﻿using FluentValidation;


namespace ProFin.Core.Models.Validations.BudgetValid
{
    public class BudgetValidation : AbstractValidator<Budget>
    {
        public BudgetValidation()
        {
            RuleFor(b => b.CategoryTransactionId)
                .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório.");

            RuleFor(b => b.Limit)
                .GreaterThan(0).WithMessage("O campo {PropertyName} deve ser maior que zero.");
        }
    }
}
