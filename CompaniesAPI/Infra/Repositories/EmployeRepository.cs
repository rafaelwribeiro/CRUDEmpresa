using CompaniesAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace CompaniesAPI.Infra.Repositories
{
    public class EmployeRepository : IEmployeRepository
    {
        private readonly ApplicationDbContext _appDbContext;

        public EmployeRepository(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<IList<Employe>> GetByCompanyIdAsync(int id)
        {
            return await _appDbContext.Employes.Where(e => e.CompanyId == id).ToListAsync();
        }
    }
}
