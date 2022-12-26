using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Domain;
using CompaniesAPI.Infra.Repositories;
using Mapster;

namespace CompaniesAPI.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IRoleRepository _roleRepository;


        public CompanyService(ICompanyRepository companyRepository,
                              IRoleRepository roleRepository)
        {
            _companyRepository = companyRepository;
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

            foreach (var employe in employes)
            {
                if (employe.Role == null) continue;
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
            var resultList = list.Adapt<IList<CompanyReadContract>>();
            return resultList;
        }

        public async Task<CompanyReadContract> GetAsync(int id)
        {
            var company = await _companyRepository.GetAsync(id);
            return company.Adapt<CompanyReadContract>();
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
            if(company.Address == null)
            {
                company.Address = contract.Address.Adapt<Address>();
                return;
            }
            company.Address.ZipCode= contract.Address.ZipCode;
            company.Address.Street = contract.Address.Street;
            company.Address.Number= contract.Address.Number;
            company.Address.Neighborhood= contract.Address.Neighborhood;
            company.Address.City= contract.Address.City;
            company.Address.Complement = contract.Address.Complement;
        }
    }
}
