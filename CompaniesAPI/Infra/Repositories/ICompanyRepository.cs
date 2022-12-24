using CompaniesAPI.Domain;

namespace CompaniesAPI.Infra.Repositories
{
    public interface ICompanyRepository
    {
        public Task<Company> AddAsync(Company entity);
    }
}
