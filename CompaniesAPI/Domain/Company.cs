namespace CompaniesAPI.Domain;

public class Company : DomainBase
{
    public string Name { get; set; }
    public Address Address { get; set; }
    public string Phone { get; set; }
    public IList<Employe> Employes { get; set; }
}
