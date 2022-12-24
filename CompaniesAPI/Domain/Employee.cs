namespace CompaniesAPI.Domain;

public class Employee : DomainBase
{
    public string Name { get; set; }
    public float Salary { get; set; }
    public int CompanyId { get; set; }
    public virtual Company Company { get; set; }
    public int RoleId { get; set; }
    public virtual Role Role { get; set; }
}
