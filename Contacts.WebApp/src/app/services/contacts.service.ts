import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl +'contacts');
  }

  addContact(addContactToList: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl +'contacts', addContactToList);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}contacts/${id}`);
  }

  updateContact(id: number, updateContact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.baseUrl}contacts/${id}`, updateContact);
  }

  deteteContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${this.baseUrl}contacts/${id}`);
  }
}
