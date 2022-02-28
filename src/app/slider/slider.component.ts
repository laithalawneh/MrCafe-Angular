import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  WebsiteName?:string
  constructor( public HomeAPI:HomeserviceService) {

    this.HomeAPI.getwebsiteDetails().subscribe(result=>{
      this.HomeAPI.Website=result ;
      this.WebsiteName=this.HomeAPI.Website[0].websitename;
    });
   }

  ngOnInit(): void {
  }

}
