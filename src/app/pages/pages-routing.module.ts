//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

//Components
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'contacto', component: ContactComponent },
      
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],


exports: [RouterModule]
})
export class PagesRoutingModule { }
