using Contacts.API.Datebase;
using Contacts.API.DTOs;
using Contacts.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Contacts.API.Controllers
{
  public class UserController : BaseApiController
  {
    private readonly ContactsDbContext contactsDbContext;

    public UserController(ContactsDbContext contactsDbContext)
    {
      this.contactsDbContext = contactsDbContext;
    }

    // Register new user account
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
      if (await UserExists(registerDto.Username))
      {
        return BadRequest("Username is taken");
      }

      var user = new AppUser
      {
        UserName = registerDto.Username.ToLower(),
        Password = registerDto.Password
      };

      contactsDbContext.Users.Add(user);
      await contactsDbContext.SaveChangesAsync();

      return Ok();
    }
     
    // Login user by username and password
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
      var user = await contactsDbContext.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
      
      if (user == null)
        return Unauthorized("Invalid username!");
      
      var pass = await contactsDbContext.Users.SingleOrDefaultAsync(x=>x.Password == loginDto.Password);

      if (pass == null)
        return Unauthorized("Invalid password!");

      return new UserDto
      {
        UserName = user.UserName,
      };
    }
    
    // Checking for username already exists
    private async Task<bool> UserExists(string username)
    {
      return await contactsDbContext.Users.AnyAsync(x => x.UserName == username.ToLower());
    }
  }
}
