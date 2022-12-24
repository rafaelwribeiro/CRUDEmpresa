using CompaniesAPI.Domain;

namespace CompaniesAPI.Infra.Repositories
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public CompanyRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<Company> AddAsync(Company entity)
        {
            _applicationDbContext.Companies.Add(entity);
            _applicationDbContext.SaveChanges();
            return entity;
        }
    }
}
