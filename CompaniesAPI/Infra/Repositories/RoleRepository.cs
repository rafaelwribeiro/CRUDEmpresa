using CompaniesAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace CompaniesAPI.Infra.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly ApplicationDbContext _appDbContext;
        public RoleRepository(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<IList<Role>> GetAllAsync()
        {
            return await _appDbContext.Roles.ToListAsync();
        }

        public async Task<Role> GetAsync(int id)
        {
            var role = await _appDbContext.Roles.Where(r => r.Id == id).FirstAsync();
            return role;
        }
    }
}
