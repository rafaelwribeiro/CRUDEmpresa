using Microsoft.AspNetCore.Identity;

namespace CompaniesAPI.Domain;

public class Employe : DomainBase
{
    public string Name { get; set; }
    public Role Role { get; set; }
    public float Salary { get; set; }
}
