import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafedashbordComponent } from 'src/app/cafedashbord/cafedashbord.component';

const routes: Routes = [
  {path:'',component:CafedashbordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafemoduleRoutingModule { }
