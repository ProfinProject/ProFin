using AutoMapper;
using Microsoft.Extensions.Hosting;
using ProFin.API.DTOs;
using ProFin.Core.Business.Models;

namespace ProFin.API.Configurations
{
    public class AutoMappingConfiguration : Profile
    {
        public AutoMappingConfiguration()
        {
            CreateMap<TransactionDTO, Transaction>();
            CreateMap<Transaction, TransactionDTO>();
        }
    }
}
