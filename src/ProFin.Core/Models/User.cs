namespace ProFin.Core.Models
{
    public class User : Entity
    {
        public User(Guid id, string fistName, string lastName, DateTime birthdate)           
        {
            FistName = fistName;
            LastName = lastName;
            Birthdate = birthdate;
        }

        public string FistName { get; private set; }
        public string LastName { get; private set; }
        public DateTime Birthdate { get; private set; }
    }
}
