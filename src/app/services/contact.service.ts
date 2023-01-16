import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './../models/contact';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(contact:ContactModel){
    return this.http.post(`${environment.API_FIREBASE}/contacts.json`,contact);
  }

}
