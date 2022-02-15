import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllCategory:any=[]
  constructor(private spinner:NgxSpinnerService , public HomeAPI:HomeserviceService) {
    
    this.HomeAPI.getCategory().subscribe(result=>{
      console.log(result)
      this.AllCategory=result});
      
    this.spinner.show();
    setTimeout(() => {this.spinner.hide();},2000);   
    
    
    
  
  }

  ngOnInit(): void {
  }

}
