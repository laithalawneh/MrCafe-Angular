import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashbordComponent } from 'src/app/userdashbord/userdashbord.component';

const routes: Routes = [
  {path:'',component:UserdashbordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }
