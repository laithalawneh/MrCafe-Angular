import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashbordComponent } from 'src/app/admindashbord/admindashbord.component';

const routes: Routes = [
  {path:'',component:AdmindashbordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
