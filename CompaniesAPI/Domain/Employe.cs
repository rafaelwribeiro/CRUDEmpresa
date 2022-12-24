using Microsoft.AspNetCore.Identity;

namespace CompaniesAPI.Domain;

public class Employe
{
    public int Id { get; set; }
    public string Name { get; set; }
    public Role Role { get; set; }
    public float Salary { get; set; }
}
