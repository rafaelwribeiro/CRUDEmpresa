using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Domain;
using CompaniesAPI.Infra.Repositories;
using Mapster;

namespace CompaniesAPI.Services
{
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _roleRepository;
        public RoleService(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public async Task<IList<RoleContract>> GetAllAsync()
        {
            var list = await _roleRepository.GetAllAsync();
            var listResult = list.ToList().Select(c => c.Adapt<RoleContract>()).ToList();
            return listResult;
        }

        public async Task<RoleContract> GetAsync(int id)
        {
            Role role = await _roleRepository.GetAsync(id);
            return role.Adapt<RoleContract>();
        }
    }
}
