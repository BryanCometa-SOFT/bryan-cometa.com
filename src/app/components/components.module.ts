//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//Components
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
