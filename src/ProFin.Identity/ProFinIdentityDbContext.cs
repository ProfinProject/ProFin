using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ProFin.Identity
{
    public class ProFinIdentityDbContext : IdentityDbContext
    {
        public ProFinIdentityDbContext(DbContextOptions<ProFinIdentityDbContext> options) : base(options) { }
    }
}
