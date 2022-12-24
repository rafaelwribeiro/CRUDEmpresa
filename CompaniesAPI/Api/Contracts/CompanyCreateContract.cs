using CompaniesAPI.Domain;

namespace CompaniesAPI.Api.Contracts;

public class CompanyCreateContract
{
    public string Name { get; set; }
    public Address Address { get; set; }
    public string Phone { get; set; }
}
