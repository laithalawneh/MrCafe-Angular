import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  Websitelogo?:string
  constructor(public HomeAPI:HomeserviceService) {

    this.HomeAPI.getwebsiteDetails().subscribe(result=>{
      this.HomeAPI.Website=result ;
       this.Websitelogo=this.HomeAPI.Website[0].image1;
    });
   }

  ngOnInit(): void {
  }

}
