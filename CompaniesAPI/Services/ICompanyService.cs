using CompaniesAPI.Api.Contracts;

namespace CompaniesAPI.Services
{
    public interface ICompanyService
    {
        public Task<CompanyReadContract> Add(CompanyCreateContract contract);
    }
}
