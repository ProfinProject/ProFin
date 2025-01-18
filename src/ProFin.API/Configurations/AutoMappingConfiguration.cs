using AutoMapper;
using ProFin.API.ViewModel;
using ProFin.API.ViewModels;
using ProFin.Core.Business.Models;
using ProFin.Core.Models;

namespace ProFin.API.Configurations
{
    public class AutoMappingConfiguration : Profile
    {
        public AutoMappingConfiguration()
        {
            CreateMap<TransactionViewModel, Transaction>();
            CreateMap<Transaction, TransactionViewModel>();
            CreateMap<CategoryTransaction, CategoryTransactionViewModel>().ReverseMap();
        }
    }
}
