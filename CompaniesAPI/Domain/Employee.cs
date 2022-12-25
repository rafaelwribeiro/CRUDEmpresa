namespace CompaniesAPI.Domain;

public class Employee : DomainBase
{
    public string Name { get; set; }
    public float Salary { get; set; }
    public int CompanyId { get; set; }
    public Company Company { get; set; }
    public int RoleId { get; set; }
    public Role Role { get; set; }
}
