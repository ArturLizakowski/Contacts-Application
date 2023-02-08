import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactDetails: Contact = {
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
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = parseInt(params.get('id') as string);

        if (id) {
          this.contactsService.getContact(id).subscribe({
            next: (response) => {
              this.contactDetails = response;
            }
          });
        }
      }
    })
  }
  
  updateContact() {
    this.contactsService.updateContact(this.contactDetails.id, this.contactDetails).subscribe({
      next: (response) => {
        this.router.navigate(['contactsList']);
      }
    })
  }

  deleteContact(id: number) {
    this.contactsService.deteteContact(id).subscribe({
      next: (response) => {
        this.router.navigate(['contactsList']);
      }
    })
  }

  IsHidden= false;

  onSelect() {
  this.IsHidden= !this.IsHidden;
  }
}
