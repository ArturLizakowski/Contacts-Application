import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.getAllContacts()
  }

  getAllContacts() {
    this.contactsService.getAllContacts().subscribe(
     returnAll => {
      this.contacts = returnAll;
     },
     (error) => {
        console.log("Something wrong!");
     } 
    )
  }
}


