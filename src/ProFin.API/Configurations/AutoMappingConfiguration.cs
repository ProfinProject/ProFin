using AutoMapper;
using ProFin.API.ViewModel;
using ProFin.API.ViewModels;
using ProFin.Core.Models;
using static ProFin.API.ViewModels.UserViewModel;

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
