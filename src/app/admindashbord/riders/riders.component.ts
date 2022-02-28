import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent implements OnInit {

  @Input()id:number | undefined;
  @Input()name:string |undefined;
  @Input()phone:number | undefined;
  @Input ()userName:number |undefined;
  @Input ()password:number |undefined;
  @Input()status:string | undefined;
  @Input()salary:string | undefined;
  @Input()adresses:string | undefined;
  @Input()deliveryorders:string | undefined;

  
  constructor() { }

  ngOnInit(): void {
  }

}
