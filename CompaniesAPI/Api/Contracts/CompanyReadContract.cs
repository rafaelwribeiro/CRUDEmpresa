namespace CompaniesAPI.Api.Contracts;

public class CompanyReadContract
{
    public int Id { get; set; }
    public string Name { get; set; }
    public AddressContract? Address { get; set; }
    public string Phone { get; set; }
    public IList<EmployeReadContract>? Employes { get; set; }
}
