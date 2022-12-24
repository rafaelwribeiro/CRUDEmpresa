using CompaniesAPI.Api.Contracts;

namespace CompaniesAPI.Services
{
    public interface IRoleService
    {
        public Task<IList<RoleContract>> GetAllAsync();
        public Task<RoleContract> GetAsync(int id);
    }
}
