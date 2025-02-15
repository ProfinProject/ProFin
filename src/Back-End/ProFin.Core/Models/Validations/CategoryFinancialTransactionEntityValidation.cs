using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProFin.Core.Models.Validations
{
    public class CategoryFinancialTransactionEntityValidation : AbstractValidator<CategoryFinancialTransaction>
    {
        public CategoryFinancialTransactionEntityValidation()
        {
            RuleFor(c => c.Name)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .MinimumLength(10).WithMessage("O campo {PropertyName} precisa ser maior que {ComparisonValue}");

            RuleFor(c => c.Description)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .MinimumLength(10).WithMessage("O campo {PropertyName} precisa ser maior que {ComparisonValue}");
        }
    }
}
