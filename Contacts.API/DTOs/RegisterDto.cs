using System.ComponentModel.DataAnnotations;

namespace Contacts.API.DTOs
{
  public class RegisterDto
  {
    [Required]
    [MaxLength(255)]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
  }
}
