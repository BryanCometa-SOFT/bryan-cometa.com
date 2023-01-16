import { Component } from '@angular/core';

import { ContactModel } from './../../models/contact';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder, private contactService:ContactService){
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      description: ['',Validators.required],
    });
  }

  saveContact(){
    if(this.form.invalid){

      Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      });

      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        text: 'Todos los campos son obligatorios',
        timer: 5000
      });
      return;
    }

    this.contactService.createContact(this.form.value).subscribe(resp =>{
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Los datos se guardaron correctamente',
        timer: 5000
      });
      this.form.reset();
    });
  }

  get nameValid(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }

  get emailValid(){
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get descriptionValid(){
    return this.form.get('description')?.invalid && this.form.get('description')?.touched;
  }

}
