using CompaniesAPI.Domain;

namespace CompaniesAPI.Infra.Repositories;

public interface IAddressRepository
{
    public Task<Address> GetByCompanyIdAsync(int id);
}
