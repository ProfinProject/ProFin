using AutoMapper;
using ProFin.API.ViewModels;
using ProFin.Core.Models;

namespace ProFin.API.Configurations
{
    public class AutoMappingConfiguration : Profile
    {
        public AutoMappingConfiguration()
        {
            CreateMap<TransactionViewModel, Transaction>();
            CreateMap<Transaction, TransactionViewModel>();
        }
    }
}
