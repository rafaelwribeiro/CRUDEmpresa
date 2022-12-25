using CompaniesAPI.Domain;

namespace CompaniesAPI.Infra.Repositories
{
    public interface IEmployeeRepository
    {
        public Task<IList<Employee>> GetByCompanyIdAsync(int id);
        public Task<Employee> GetAsync(int idCompany, int id);
        public Task<Employee> CreateAsync(int idCompany, Employee employee);
        public Task UpdateAsync(int idCompany, Employee employee);
        public Task DeleteAsync(int idCompany, Employee employee);
    }
}
