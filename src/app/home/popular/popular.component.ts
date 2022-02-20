import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
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
