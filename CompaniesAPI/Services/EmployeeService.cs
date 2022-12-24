using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Infra.Repositories;
using Mapster;

namespace CompaniesAPI.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IRoleRepository _roleRepository;

        public EmployeeService(IEmployeeRepository employeRepository, IRoleRepository roleRepository)
        {
            _employeeRepository = employeRepository;
            _roleRepository = roleRepository;
        }

        public Task<EmployeeReadContract> CreateAsync(int idCompany, EmployeeCreateContract contract)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int idCompany, int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IList<EmployeeReadContract>> GetAllAsync(int idCompany)
        {
            var list = await _employeeRepository.GetByCompanyIdAsync(idCompany);
            var resultList = list.Select(async e => {
                e.Role = await _roleRepository.GetAsync(e.RoleId);
            }).ToList();
            return resultList.Adapt<IList<EmployeeReadContract>>();
        }

        public Task<EmployeeReadContract> GetAsync(int idCompany, int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(int idCompany, EmployeeUpdateContract contract)
        {
            throw new NotImplementedException();
        }
    }
}
