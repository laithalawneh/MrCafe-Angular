import { Component, OnInit } from '@angular/core';
import { CafeserviceService } from '../service/cafeservice.service';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {
  allCategories:any=[]
  AllCafes:any=[]
  constructor(public HomeAPI:HomeserviceService,public cafesAPI:CafeserviceService) {
    this.HomeAPI.getCategory().subscribe(result=>{
      console.log(result)
      this.allCategories=result});

      this.cafesAPI.getAllCafes().subscribe(result=>{
        console.log(result)
        this.AllCafes=result});
   }

   
 

  ngOnInit(): void {
  }


  sortCafes(item :any){
    console.log("llllllllllll");
    if(item.target.value == "lower"){
      this.cafesAPI.GetCofesByRateAsc().subscribe(res => this.AllCafes =res)
    }
    else if(item.target.value == "higher"){
      this.cafesAPI.GetCofesByRateDec().subscribe(res=> this.AllCafes=res);
    }
    else{
      this.cafesAPI.getAllCafes().subscribe(result=>{
        console.log(result)
        this.AllCafes=result});
   }
    
  }


  
  


}