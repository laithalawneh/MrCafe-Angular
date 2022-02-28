import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { isTemplateExpression } from 'typescript';
import { CafeserviceService } from '../service/cafeservice.service';
import { HomeserviceService } from '../service/homeservice.service';

export interface sidebar{
  Id:number;
  Name:String;
}

export const Item=[
  {
    Id:1,
    Name:"AllCafes"
  } ,
  {
    Id:2,
    Name:"AllDeleivery"
  },
  {
    Id:3,
    Name:"CreateACC"
  }
];

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})

export class AdmindashbordComponent implements OnInit {

  onlineRiders:any = [] ; 
  busyRiders:any = [] ;


  AllCafes:any=[]
  AllDeleviry:any=[]
  statusArr:any = []

  selected:any='';
  items:sidebar[]=Item;
  selectedName:any="";
  selectedDefault:any='';
  constructor(public HomeAPI:HomeserviceService ,private http:HttpClient , public CafeAPI:CafeserviceService) { 
  
  }
  AllCoffeShop(){
    this.CafeAPI.getAllCafes().subscribe((res)=>{
      this.AllCafes = res ;
  }); 
  }
  getAllDelivery(){
   this.http.get('https://localhost:44368/api/Delivery/GetAllDeliverys').subscribe((res)=>{
   this.AllDeleviry = res ;
   }) 
  }

  
  //back to Dashborad
  defaultToShow(){
    this.selectedName='';
    this.selectedDefault='';
  }

//display items when trigger
  itemToShow(item:any){
    this.selectedName=null;
    this.items.map(
      (data)=>{
        if(data.Id === item){
          this.selectedName=data.Name;
          this.selectedDefault=data.Name;
        }
      }
    );
  }

  

  ngOnInit(): void {
    this.AllCoffeShop();
    this.getAllDelivery();
    
  }

}
