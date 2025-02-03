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
            CreateMap<TransactionEntity, TransactionViewModel>().ReverseMap();
            CreateMap<CategoryTransaction, CategoryTransactionViewModel>().ReverseMap();
        }
    }
}
