namespace CompaniesAPI.Api.Contracts;

public class CompanyUpdateContract
{
    public int Id { get; set; }
    public string Name { get; set; }
    public AddressContract? Address { get; set; }
    public string Phone { get; set; }
    public IList<EmployeeUpdateContract>? Employes { get; set; }
}
