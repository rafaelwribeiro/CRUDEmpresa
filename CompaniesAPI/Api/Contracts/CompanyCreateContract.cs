namespace CompaniesAPI.Api.Contracts;

public class CompanyCreateContract
{
    public string Name { get; set; }
    public AddressContract? Address { get; set; }
    public string Phone { get; set; }
    public IList<EmployeeCreateContract>? Employes { get; set; }
}
