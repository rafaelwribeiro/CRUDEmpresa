namespace CompaniesAPI.Api.Contracts;

public class CompanyReadContract
{
    public int Id { get; set; }
    public string Name { get; set; }
    public AddressContract? Address { get; set; }
    public string Phone { get; set; }
    public IList<EmployeeReadContract>? Employes { get; set; }
    public string FullAddress {
        get {
            return Address?.ToString() ?? "";
        }
        set
        {
            FullAddress = value;
        }
    }
}
