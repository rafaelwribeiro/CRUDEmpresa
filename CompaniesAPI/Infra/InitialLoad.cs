using CompaniesAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace CompaniesAPI.Infra
{
    public class InitialLoad
    {
        public static void Load(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                PopulateRoles(context);
            }
        }

        private static void PopulateRoles(ApplicationDbContext context)
        {
            if (context.Roles.Any()) return;

            var role1 = new Role();
            role1.Name = "Programador";

            var role2 = new Role();
            role2.Name = "Designer";

            var role3 = new Role();
            role3.Name = "Administração";

            context.Roles.Add(role1);
            context.Roles.Add(role2);
            context.Roles.Add(role3);
            context.SaveChanges();
        }
    }
}
