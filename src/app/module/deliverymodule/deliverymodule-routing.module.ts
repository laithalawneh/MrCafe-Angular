import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryloginComponent } from 'src/app/delivery/deliverylogin/deliverylogin.component';
import { DeliverysingupComponent } from 'src/app/delivery/deliverysingup/deliverysingup.component';

const routes: Routes = [
  {path:'',component:DeliverysingupComponent},
  {path:'login',component:DeliveryloginComponent},
  {path:'singup',component:DeliverysingupComponent},

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverymoduleRoutingModule { }
