namespace CompaniesAPI.Api.Contracts
{
    public class EmployeUpdateContract
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public RoleContract Role { get; set; }
        public float Salary { get; set; }
    }
}
