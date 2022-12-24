using CompaniesAPI.Api.Contracts;

namespace CompaniesAPI.Services
{
    public interface ICompanyService
    {
        public Task<CompanyReadContract> AddAsync(CompanyCreateContract contract);
        public Task<CompanyReadContract> GetAsync(int id);
        public Task<IList<CompanyReadContract>> GetAllAsync();
        public Task Delete(int id);
        public Task UpdateAsync(CompanyUpdateContract contract);
    }
}
