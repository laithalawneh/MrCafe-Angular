import { Component, Input, OnInit } from '@angular/core';
import { CafeserviceService } from 'src/app/service/cafeservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input()cafeid:number | undefined;
  @Input()cafesname:string |undefined;
  @Input()rate:number | undefined;
  @Input ()latitude:number |undefined;
  @Input ()longitude:number |undefined;
  @Input()wallets:string | undefined;
  @Input()products:string | undefined;
  @Input()logins:string | undefined;
  constructor(private cafeAPI:CafeserviceService) { }

  ngOnInit(): void {
  }

  CafeDetail(){
    
    this.cafeAPI.getProductsByCafe(this.cafeid);
    if(this.cafesname !=undefined)
    localStorage.setItem('cafename',this.cafesname);

    console.log("the id is " + this.cafeid);

  }

}
