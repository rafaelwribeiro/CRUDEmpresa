using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Domain;
using CompaniesAPI.Infra.Repositories;
using Mapster;

namespace CompaniesAPI.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IAddressRepository _addressRepository;
        private readonly IEmployeeRepository _employeRepository;
        private readonly IRoleRepository _roleRepository;


        public CompanyService(ICompanyRepository companyRepository,
                              IAddressRepository addressRepository,
                              IEmployeeRepository employeRepository,
                              IRoleRepository roleRepository)
        {
            _companyRepository = companyRepository;
            _addressRepository = addressRepository;
            _employeRepository = employeRepository;
            _roleRepository = roleRepository;
        }

        public async Task<CompanyReadContract> AddAsync(CompanyCreateContract contract)
        {
            var company = contract.Adapt<Company>();
            await BindEmployesRole(company.Employes);
            var newCompany = await _companyRepository.AddAsync(company);
            return newCompany.Adapt<CompanyReadContract>();
        }

        private async Task BindEmployesRole(IList<Employee> employes)
        {
            if (employes == null) return;

            foreach(var employe in employes)
            {
                if(employe.Role == null) continue;
                employe.Role = await _roleRepository.GetAsync(employe.Role.Id);
            }
        }

        public async Task Delete(int id)
        {
            await _companyRepository.DeleteAsync(id);
        }

        public async Task<IList<CompanyReadContract>> GetAllAsync()
        {
            var list = await _companyRepository.GetAllAsync();
            list.ToList().ForEach(company =>
            {
                company.Address = _addressRepository.GetByCompanyIdAsync(company.Id).Result;
                company.Employes = _employeRepository.GetByCompanyIdAsync(company.Id).Result;
            });
            var resultList = list.Select(c => c.Adapt<CompanyReadContract>()).ToList();
            return resultList;
        }

        public async Task<CompanyReadContract> GetAsync(int id)
        {
            var company = await _companyRepository.GetAsync(id);
            await BindAddress(company);
            await BindEmployees(company);
            return company.Adapt<CompanyReadContract>();
        }

        private async Task BindEmployees(Company company)
        {
            if (company == null) return;
            company.Employes = await _employeRepository.GetByCompanyIdAsync(company.Id);
        }

        private async Task BindAddress(Company company)
        {
            if (company == null) return;
            company.Address = await _addressRepository.GetByCompanyIdAsync(company.Id);
        }

        public async Task UpdateAsync(CompanyUpdateContract contract)
        {
            var company = await _companyRepository.GetAsync(contract.Id);
            company.Name = contract.Name;
            company.Phone= contract.Phone;
            MapAddress(company, contract);
            await _companyRepository.UpdateAsync(company);
        }

        private void MapAddress(Company company, CompanyUpdateContract contract)
        {
            if (contract.Address == null) return;
            company.Address.ZipCode= contract.Address.ZipCode;
            company.Address.Street = contract.Address.Street;
            company.Address.Number= contract.Address.Number;
            company.Address.Neighborhood= contract.Address.Neighborhood;
            company.Address.City= contract.Address.City;
            company.Address.Complement = contract.Address.Complement;
        }
    }
}
