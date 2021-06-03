import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserTableComponent } from './admin-user-table/admin-user-table.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

LoginComponent
const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboad",component:AdminUserTableComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
