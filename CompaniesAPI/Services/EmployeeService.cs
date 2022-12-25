using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Domain;
using CompaniesAPI.Infra.Repositories;
using Mapster;
using System.Diagnostics.Contracts;

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

        public async Task<EmployeeReadContract> CreateAsync(int idCompany, EmployeeCreateContract contract)
        {
            var employee = contract.Adapt<Employee>();
            await BindRole(employee);
            var employeeContract = await _employeeRepository.CreateAsync(idCompany, employee);
            return employeeContract.Adapt<EmployeeReadContract>();
        }

        private async Task BindRole(Employee employee)
        {
            if (employee?.Role == null) return;
            employee.Role = await _roleRepository.GetAsync(employee.RoleId);
        }

        public async Task DeleteAsync(int idCompany, int id)
        {
            var employee = await _employeeRepository.GetAsync(idCompany, id);
            await _employeeRepository.DeleteAsync(idCompany, employee);
        }

        public async Task<IList<EmployeeReadContract>> GetAllAsync(int idCompany)
        {
            var list = await _employeeRepository.GetByCompanyIdAsync(idCompany);
            var resultList = list.Adapt<IList<EmployeeReadContract>>();
            return resultList;
        }

        public async Task<EmployeeReadContract> GetAsync(int idCompany, int id)
        {
            var employee = await _employeeRepository.GetAsync(idCompany, id);
            return employee.Adapt<EmployeeReadContract>();
        }

        public async Task UpdateAsync(int idCompany, EmployeeUpdateContract contract)
        {
            var employee = await _employeeRepository.GetAsync(idCompany, contract.Id);
            contract.Adapt(employee);
            await BindRole(employee);
            await _employeeRepository.UpdateAsync(idCompany, employee);
        }
    }
}
