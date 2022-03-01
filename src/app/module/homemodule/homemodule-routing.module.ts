import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { CafesComponent } from 'src/app/cafes/cafes.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { DetailpageComponent } from 'src/app/detailpage/detailpage.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MaphomeComponent } from 'src/app/maphome/maphome.component';
import { ProductComponent } from 'src/app/product/product.component';
import { SignupComponent } from 'src/app/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'product',component:ProductComponent},
  {path:'Cafes',component:CafesComponent},
  {path:'Maphome',component:MaphomeComponent},
  {path:'Cart',component:CartComponent},
  {path:'detailpage/:id',component:DetailpageComponent}


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
