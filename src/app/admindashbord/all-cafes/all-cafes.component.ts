import { Component, Input, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/service/homeservice.service';

@Component({
  selector: 'app-all-cafes',
  templateUrl: './all-cafes.component.html',
  styleUrls: ['./all-cafes.component.css']
})
export class AllCafesComponent implements OnInit {
  

  @Input()cafeid:number | undefined;
  @Input()cafesname:string |undefined;
  @Input()rate:number | undefined;
  @Input ()latitude:number |undefined;
  @Input ()longitude:number |undefined;
  @Input()wallets:string | undefined;
  @Input()products:string | undefined;
  @Input()logins:string | undefined;
  constructor() { }

  ngOnInit(): void {
   
  }

}
