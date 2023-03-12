/**
 * Modules
 **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Routing
 **/
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { ContactRequestComponent } from './admin/contact-request/contact-request.component';

/**
 * Components
 **/


@NgModule({
  declarations: [
  
    HomeComponent,
       ContactComponent,
       LoginComponent,
       ContactRequestComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
