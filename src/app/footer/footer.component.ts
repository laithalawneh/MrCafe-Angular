import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  WebsitePhone?:string;
  WebsiteEmail?:string;
  WebsiteName?:string;


  constructor(public HomeAPI:HomeserviceService) {
    this.HomeAPI.getwebsiteDetails().subscribe(result=>{
      this.HomeAPI.Website=result ;
      this.WebsitePhone=this.HomeAPI.Website[0].phone;
      this.WebsiteEmail=this.HomeAPI.Website[0].email;
      this.WebsiteName=this.HomeAPI.Website[0].websitename;

    });
   }

  ngOnInit(): void {
  }

}
