using CompaniesAPI.Domain;

namespace CompaniesAPI.Infra.Repositories
{
    public interface IEmployeRepository
    {
        public Task<IList<Employe>> GetByCompanyIdAsync(int id);
    }
}
