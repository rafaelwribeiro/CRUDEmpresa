using CompaniesAPI.Domain;

namespace CompaniesAPI.Api.Contracts
{
    public class CompanyReadContract
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Address Address { get; set; }
        public string Phone { get; set; }
    }
}
