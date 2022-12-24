

using CompaniesAPI.Api.Contracts;

namespace CompaniesAPI.Services
{
    public interface IEmployeeService
    {
        public Task<IList<EmployeeReadContract>> GetAllAsync(int idCompany);
        public Task<EmployeeReadContract> GetAsync(int idCompany, int id);
        public Task<EmployeeReadContract> CreateAsync(int idCompany, EmployeeCreateContract contract);
        public Task DeleteAsync(int idCompany, int id);
        public Task UpdateAsync(int idCompany, EmployeeUpdateContract contract);
    }
}
