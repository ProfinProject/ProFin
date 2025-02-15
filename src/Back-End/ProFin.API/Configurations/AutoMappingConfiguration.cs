using AutoMapper;
using ProFin.API.ViewModel;
using ProFin.API.ViewModels;
using ProFin.Core.Models;

namespace ProFin.API.Configurations
{
    public class AutoMappingConfiguration : Profile
    {
        public AutoMappingConfiguration()
        {
            CreateMap<FinancialTransaction, TransactionViewModel>().ReverseMap();
            CreateMap<CategoryFinancialTransaction, CategoryTransactionViewModel>().ReverseMap();
        }
    }
}
