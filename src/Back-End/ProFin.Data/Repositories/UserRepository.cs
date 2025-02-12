using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class UserRepository(AppDbContext db) : Repository<User>(db), IUserRepository
    {

    }
}