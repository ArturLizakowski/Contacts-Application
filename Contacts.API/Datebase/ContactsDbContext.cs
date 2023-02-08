using Contacts.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Contacts.API.Datebase
{
  public class ContactsDbContext : DbContext
  {
    public ContactsDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Contact> Contacts { get; set; }

    public DbSet<AppUser> Users { get; set; }
  }
}
