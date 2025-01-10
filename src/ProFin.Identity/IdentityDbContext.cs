using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ProFin.Identity
{
    public class IdentityDbContext : Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext
    {
        public IdentityDbContext(DbContextOptions<IdentityDbContext> options) : base(options) { }
    }
}
