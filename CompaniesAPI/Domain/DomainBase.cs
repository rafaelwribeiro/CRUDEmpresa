namespace CompaniesAPI.Domain
{
    public abstract class DomainBase
    {
        private DateTime? _createdAt = null;
        public DateTime? CreatedAt {
            get { return _createdAt; }
            set
            {
                if(_createdAt == null)
                    _createdAt = DateTime.Now;
            }
        }
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
