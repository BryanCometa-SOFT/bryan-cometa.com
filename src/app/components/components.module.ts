//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//Components
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { LogoContainerComponent } from './logo-container/logo-container.component';
import { CardBriefcaseComponent } from './card-briefcase/card-briefcase.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    ButtonComponent,
    LogoContainerComponent,
    CardBriefcaseComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    ButtonComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
