using CompaniesAPI.Domain;

namespace CompaniesAPI.Infra.Repositories
{
    public interface IRoleRepository
    {
        public Task<IList<Role>> GetAllAsync();
        public Task<Role> GetAsync(int id);
    }
}
