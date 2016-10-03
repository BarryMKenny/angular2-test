import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { Http } from '@angular/http';

@Injectable()
export class ContactsService {
  constructor(private http: Http) { }
  
  getContacts() {
	  return this.http.get('http://localhost:4201/api/contacts')
      .map(res => res.json())
      .map(data => data.items);
  }
  
  getContact(id: number | string) {
	  return this.http.get('http://localhost:4201/api/contacts/' + id)
      .map(res => res.json())
      .map(data => data.item);
  }
}
