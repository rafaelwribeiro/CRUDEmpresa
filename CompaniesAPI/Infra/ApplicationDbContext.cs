using CompaniesAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace CompaniesAPI.Infra
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Company> Companies { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
