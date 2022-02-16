import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./module/homemodule/homemodule-routing.module').then(m=>m.HomemoduleRoutingModule)},
  {path:'Home',loadChildren:()=>import('./module/homemodule/homemodule-routing.module').then(m=>m.HomemoduleRoutingModule)},
  {path:'User',loadChildren:()=>import('./module/usermodule/usermodule-routing.module').then(m=>m.UsermoduleRoutingModule)},
  {path:'Admin',loadChildren:()=>import('./module/adminmodule/adminmodule-routing.module').then(m=>m.AdminmoduleRoutingModule)},
  {path:'Cafe',loadChildren:()=>import('./module/cafemodule/cafemodule-routing.module').then(m=>m.CafemoduleRoutingModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
