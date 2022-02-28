import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  WebsiteAbout?:string
  constructor(public HomeAPI:HomeserviceService) {
    this.HomeAPI.getwebsiteDetails().subscribe(result=>{
      this.HomeAPI.Website=result ;
      this.WebsiteAbout=this.HomeAPI.Website[0].aboutus;
    });
   }

  ngOnInit(): void {
  }

}
