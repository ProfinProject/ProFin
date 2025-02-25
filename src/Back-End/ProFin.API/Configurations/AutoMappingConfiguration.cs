using AutoMapper;
using ProFin.API.ViewModel;
using ProFin.Core.Models;

namespace ProFin.API.Configurations
{
    public class AutoMappingConfiguration : Profile
    {
        public AutoMappingConfiguration()
        {
            CreateMap<FinancialTransaction, TransactionViewModel>().ReverseMap();

            CreateMap<CategoryFinancialTransaction, CategoryTransactionViewModel>().ReverseMap();
            CreateMap<Budget, BudgetViewModel>()
               .ForMember(dest => dest.CategoryTransactionId,
                         opt => opt.MapFrom(src => src.CategoryTransactionId))
               .ReverseMap();

            CreateMap<CategoryFinancialTransaction, CategoryFinancialTransactionViewModel>()
                .ReverseMap();
        }
    }
}
