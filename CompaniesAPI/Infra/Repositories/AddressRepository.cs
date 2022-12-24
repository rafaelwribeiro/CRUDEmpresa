using CompaniesAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace CompaniesAPI.Infra.Repositories
{
    public class AddressRepository : IAddressRepository
    {
        private readonly ApplicationDbContext _appDbContext;
        public AddressRepository(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Address> GetByCompanyIdAsync(int id)
        {
            var address = await _appDbContext.Addresses.Where(a => a.CompanyId == id).FirstOrDefaultAsync();
            return address;
        }
    }
}
