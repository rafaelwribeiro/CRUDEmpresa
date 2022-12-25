namespace CompaniesAPI.Domain;

public class Address : DomainBase
{
    public string ZipCode { get; set; }
    public string Street { get; set; }
    public string Number { get; set; }
    public string Neighborhood { get; set; }
    public string City { get; set; }
    public string? State { get; set; }
    public string? CountryCode { get; set; }
    public string? Complement { get; set; }
    public int CompanyId { get; set; }
    public Company Company { get; set; }

}
