import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './admin/login/login.component';
import { ContactRequestComponent } from './admin/contact-request/contact-request.component';

@NgModule({
  declarations: [
    LoginComponent,
    ContactRequestComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
