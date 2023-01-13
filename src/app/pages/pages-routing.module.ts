//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

//Components
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    children: [
      // { path: 'login', component: LoginComponent },
      // { path: 'register', component: RegisterComponent },
      //{ path: 'home', component: HomeCharacterComponent, canActivate: [AuthGuard] },
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class PagesRoutingModule { }
