import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  onlineRiders:any = 0 ; 
  busyRiders:any = 0 ;

  
  
  constructor(private http:HttpClient) { }

  //calls all apis for get online and busy delivery 
  getInfo(){
    this.http.get('https://localhost:44368/api/Delivery/DeliveryOnline').subscribe((res)=>{
      this.onlineRiders = res  
      this.onlineRiders = this.onlineRiders / 100; 
    })

    this.http.get('').subscribe((res)=>{
      this.busyRiders = res ;
    })
  }

  ngOnInit(): void {
    this.getInfo() ;
  }

}
