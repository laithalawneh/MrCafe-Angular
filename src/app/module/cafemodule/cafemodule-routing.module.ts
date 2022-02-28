import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafedashbordComponent } from 'src/app/cafedashbord/cafedashbord.component';
import { SignupCafeComponent } from 'src/app/cafes/signup-cafe/signup-cafe.component';

const routes: Routes = [
  {path:'',component:CafedashbordComponent},
  {path:'Signup',component:SignupCafeComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafemoduleRoutingModule { }
