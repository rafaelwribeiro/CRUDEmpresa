using CompaniesAPI.Domain;

namespace CompaniesAPI.Api.Contracts
{
    public class EmployeeCreateContract
    {
        public string Name { get; set; }
        public RoleContract Role { get; set; }
        public float Salary { get; set; }
    }
}
