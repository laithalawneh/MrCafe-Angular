import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product:any=[]
  
  constructor(public HomeAPI:HomeserviceService) {

    this.HomeAPI.getproductbyCategory().subscribe(result=>{
      console.log(result)
      this.Product=result});

   }

  ngOnInit(): void {
  }

}
