namespace CompaniesAPI.Domain;

public class Company
{
    public int Id { get; set; }
    public string Name { get; set; }
    public Address Address { get; set; }
    public string Phone { get; set; }
    public IList<Employe> Employes { get; set; }
}
