namespace ProFin.Core.Models
{
    public class User : Entity
    {
        public User(Guid id, string fistName, string lastName, string email, DateTime birthdate)
            : base(id)
        {
            FistName = fistName;
            LastName = lastName;
            Birthdate = birthdate;
            Email = email;
        }

        public User()
        {

        }

        public string FistName { get; private set; }

        public string Email { get; private set; }

        public string LastName { get; private set; }

        public DateTime Birthdate { get; private set; }

        public static User Create(Guid id, string email, string firstName, string lastName, DateTime birhdate)
        {
            return new(id, firstName, lastName, email, birhdate);
        }
    }
}
