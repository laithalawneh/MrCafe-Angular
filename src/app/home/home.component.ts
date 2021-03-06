import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllCategory:any=[];
  AllCafes:any=[];

  constructor(private spinner:NgxSpinnerService , public HomeAPI:HomeserviceService , private router:Router) {
    
    this.HomeAPI.getCategory().subscribe(result=>{
      console.log(result)
      this.AllCategory=result});
      
      this.HomeAPI.getPopularCafes().subscribe(result=>{
        console.log(result)
        this.AllCafes=result});
        
    this.spinner.show();
    setTimeout(() => {this.spinner.hide();},2000);   
    
  }

  ngOnInit(): void {
  }

  gotoproduct(id:number){
    this.HomeAPI.Categoryid=id;
    this.router.navigate(['Home/product']);
  }
}
