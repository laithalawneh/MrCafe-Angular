import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private cafeAPI:CafeserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  CafeDetail(){
    
    this.router.navigate([`Home/detailpage/${this.cafeid}`])

    console.log("the id is " + this.cafeid);

  }

}