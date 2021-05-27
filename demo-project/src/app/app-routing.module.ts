import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
// import { UsercollectionComponent } from './usercollection/usercollection.component';


LoginComponent
const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboad",component:DashbordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
