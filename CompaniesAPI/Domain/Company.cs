namespace CompaniesAPI.Domain;

public class Company : DomainBase
{
    public string Name { get; set; }
    public Address? Address { get; set; }
    public string Phone { get; set; }
    public IList<Employee>? Employes { get; set; }

    public void NewEmployee(Employee employee)
    {
        Employes.Add(employee);
    }

    public void DeleteEmployee(Employee employee)
    {
        Employes.Remove(employee);
    }
}
