namespace CompaniesAPI.Domain
{
    public abstract class DomainBase
    {
        public int Id { get; set; }
        private DateTime? _createdAt;
        public DateTime? CreatedAt {
            get {
                if (_createdAt == null)
                    _createdAt = DateTime.Now;
                return _createdAt; 
            }
            set
            {
                if(_createdAt == null)
                    _createdAt = DateTime.Now;
            }
        }
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
