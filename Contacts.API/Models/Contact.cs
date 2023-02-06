using System.ComponentModel.DataAnnotations;

namespace Contacts.API.Models
{
  public class Contact
  {
    [Key]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Category { get; set; }
    public string Subcategory { get; set; } 
    public long Phone { get; set; }
    public string DateOfBirth { get; set; }

  }
}
