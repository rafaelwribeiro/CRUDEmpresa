using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Domain;
using CompaniesAPI.Infra.Repositories;
using Mapster;

namespace CompaniesAPI.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;

        public CompanyService(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public async Task<CompanyReadContract> Add(CompanyCreateContract contract)
        {
            var newCompany = _companyRepository.Add(contract.Adapt<Company>());
            return newCompany.Adapt<CompanyReadContract>();
        }

    }
}
