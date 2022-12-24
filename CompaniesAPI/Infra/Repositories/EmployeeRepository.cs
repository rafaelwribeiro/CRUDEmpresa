using CompaniesAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace CompaniesAPI.Infra.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ApplicationDbContext _appDbContext;

        public EmployeeRepository(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Employee> CreateAsync(int idCompany, Employee employee)
        {
            var company = await _appDbContext.Companies.Where(c => c.Id == idCompany).SingleOrDefaultAsync();
            if (company == null) throw new Exception($"Empresa {idCompany} não existe");
            company.NewEmployee(employee);
            _appDbContext.Companies.Update(company);
            await _appDbContext.Employes.AddAsync(employee);
            await _appDbContext.SaveChangesAsync();
            return employee;
        }

        public async Task DeleteAsync(int idCompany, Employee employee)
        {
            var company = await _appDbContext.Companies.Where(c => c.Id == idCompany).SingleOrDefaultAsync();
            if (company == null) throw new Exception($"Empresa {idCompany} não existe");
            company.DeleteEmployee(employee);
            _appDbContext.Companies.Update(company);
            _appDbContext.Employes.Remove(employee);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<Employee> GetAsync(int idCompany, int id)
        {
            var employee = await _appDbContext.Employes.Where(c => c.Id == id && c.CompanyId == idCompany).FirstOrDefaultAsync();
            return employee;
        }

        public async Task<IList<Employee>> GetByCompanyIdAsync(int id)
        {
            return await _appDbContext.Employes.Where(e => e.CompanyId == id).ToListAsync();
        }

        public async Task UpdateAsync(int idCompany, Employee employee)
        {
            _appDbContext.Attach(employee);
            _appDbContext.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _appDbContext.SaveChangesAsync();
        }
    }
}
