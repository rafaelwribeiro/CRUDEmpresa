using CompaniesAPI.Domain;

namespace CompaniesAPI.Api.Contracts
{
    public class EmployeReadContract
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public RoleContract Role { get; set; }
        public float Salary { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
