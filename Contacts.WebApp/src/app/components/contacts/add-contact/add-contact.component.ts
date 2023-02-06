import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  addContactToList: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    subcategory: '',
    phone: 123456789,
    dateOfBirth: ''
  };

  constructor(
    private contactsService: ContactsService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  addContact() {
    this.contactsService.addContact(this.addContactToList).subscribe(
      (response) => {
        this.router.navigate(['/contacts']);
      },
      (error) => {
        console.log("Something wrong!");
      }
    )
  };

  IsHidden= false;

  onSelect() {
  this.IsHidden= !this.IsHidden;
  }
}



