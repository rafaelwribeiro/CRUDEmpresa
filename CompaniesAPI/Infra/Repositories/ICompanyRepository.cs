using CompaniesAPI.Domain;

namespace CompaniesAPI.Infra.Repositories
{
    public interface ICompanyRepository
    {
        public Task<Company> AddAsync(Company entity);
        public Task UpdateAsync(Company entity);
        public Task DeleteAsync(Company entity);
        public Task<Company> GetAsync(int id);
        public Task<IList<Company>> GetAllAsync();
        public Task<IList<Company>> GetByNameAsync(string name);
        Task DeleteAsync(int id);
    }
}
