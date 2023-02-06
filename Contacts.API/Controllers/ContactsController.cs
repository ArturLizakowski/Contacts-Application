using Contacts.API.Datebase;
using Contacts.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Contacts.API.Controllers
{
  public class ContactsController : BaseApiController
  {
    private readonly ContactsDbContext contactsDbContext;

    public ContactsController(ContactsDbContext contactsDbContext)
    {
      this.contactsDbContext = contactsDbContext;
    }

    // Get all of contacts
    [HttpGet]
    public async Task<IActionResult> GetAllContacts()
    {
      var contacts = await this.contactsDbContext.Contacts.ToListAsync();
      return Ok(contacts);
    }

    // Add new contact
    [HttpPost]
    public async Task<IActionResult> AddContact([FromBody] Contact contactAdd)
    {
      var contact = new Contact();
      contact.Id = contactAdd.Id;
      contact.FirstName = contactAdd.FirstName;
      contact.LastName = contactAdd.LastName;
      contact.Email = contactAdd.Email;
      contact.Category = contactAdd.Category;
      contact.Phone = contactAdd.Phone;
      contact.DateOfBirth = contactAdd.DateOfBirth;


      await this.contactsDbContext.Contacts.AddAsync(contactAdd);
      await this.contactsDbContext.SaveChangesAsync();
      return Ok(contactAdd);
    }

    // Get contact by id
    [HttpGet("{id}")]
    public async Task<ActionResult<Contact>> GetContact(int id)
    {
      return await this.contactsDbContext.Contacts.FindAsync(id);
    }

    // Edit contact 
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateContactById(int id, Contact updateContact)
    {
      var contact = await this.contactsDbContext.Contacts.FindAsync(id);

      if (contact == null)
      {
        return BadRequest();
      }
      contact.Id = updateContact.Id;
      contact.FirstName = updateContact.FirstName;
      contact.LastName = updateContact.LastName;
      contact.Email = updateContact.Email;
      contact.Category = updateContact.Category;
      contact.Phone = updateContact.Phone;
      contact.DateOfBirth = updateContact.DateOfBirth;

      await this.contactsDbContext.SaveChangesAsync();
      return Ok(contact);
    }
    
    // Delete exisiting contact
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContact(int id)
    {
      var contact = await this.contactsDbContext.Contacts.FindAsync(id);

      if (contact == null)
      {
        return BadRequest();
      }
      this.contactsDbContext.Contacts.Remove(contact);
      await this.contactsDbContext.SaveChangesAsync();
      return Ok(contact);
    }
  }
}
