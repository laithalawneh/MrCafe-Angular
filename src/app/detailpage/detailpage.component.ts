import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CafeserviceService } from '../service/cafeservice.service';
import { CartserviceService } from '../service/cartservice.service';
import { SignupComponent } from '../signup/signup.component';
import { NavdialogComponent } from './navdialog/navdialog.component';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
curretId : number=0;
cafe :any |undefined
arr : any =[]
temp : any=[]
totalcost : number =0


  constructor(private cafeAPI:CafeserviceService,private router:Router ,private dialog : MatDialog,private cartAPI:CartserviceService) {
   }

  ngOnInit(): void {

    

    this.curretId=parseInt(this.router.url.split("/")[3]);
    console.log(this.router.url.split("/"));
    this.cafeAPI.getProductsByCafe(this.curretId).subscribe(res=>{
      console.log("the cofes are");
    console.log(res);

      this.cafe=res
    });
    

    
  
    if(localStorage.getItem("token") == null){
      this.arr  =JSON.parse(localStorage.getItem("cartorder") || '[]');

    }

    else{
      this.cartAPI.getAllItems(parseInt(localStorage.getItem("userid") || "1")).subscribe(res => {this.arr = res
      
        console.log(this.arr)
        console.log(this.arr.length)


        for(let i = 0; i < this.arr.length;i++){
          console.log("to total is aaaaaaa");
    
          this.totalcost += this.arr[i]?.quantity*this.arr[i]?.price;
          console.log("to total is "+this.totalcost);
    
        }
      });
     
    }

    

   

   
  }


 

  addtocart(item :any|null){
    console.log(item)

    console.log("kkkkkkkkkk")
    if(localStorage.getItem("token") == null){
      this.saveGustCart(item);
    }
    else{
      this.saveUserCart(item);

      
    }
    
  }

  saveUserCart(item : any){
    

      if(item.quantity == undefined) item.quantity = 1;
     
    let temp ={
      "productid":item.id,
      "userid":parseInt(localStorage.getItem("userid") || "1"),
      "quantity":item.quantity

    }
   

    this.cartAPI.addItem(temp).subscribe(res => {
      if(res){
        this.cartAPI.getAllItems(parseInt(localStorage.getItem("userid") || "2")).subscribe(res => {this.arr = res
          this.totalcost = 0;
          for(let i = 0; i< this.arr.length;i++){
            this.totalcost += this.arr[i]?.quantity * this.arr[i].price;
          }
        });

      }
    });

    
   
    

  }


  saveGustCart(item : any){

    this.arr  =JSON.parse(localStorage.getItem("cartorder") || '[]');

    if(item.quantity == undefined) item.quantity = 1;
    
    if(this.arr != "[]" && this.cafe?.cafeid == this.arr[0]?.cafeid){
      let flag = true
      for(let i = 0; i < this.arr.length;i++){
        if(this.arr[i].id == item.id){
          this.arr[i].quantity = this.arr[i].quantity+item.quantity;
          localStorage.setItem("cartorder",JSON.stringify(this.arr));
          flag = false;
          this.totalcost += item.quantity*item.price;
          break;

        }
      }

      if(flag){
        this.saveCartItem(item);

      }

    }
    else{
      this.saveCartItem(item);
      
    }

  }

  deleteCartItem(item : any){
    if(localStorage.getItem("token") == null){
      this.deleteGustItem(item);
    }
    else{
      this.deleteUserItem(item);
     
    }    
  }

  deleteUserItem(item : any){
    this.cartAPI.deleteItem(item.id).subscribe(res =>{
      if(res){
        this.cartAPI.getAllItems(parseInt(localStorage.getItem("userid") || "1")).subscribe(res => {this.arr = res
          this.totalcost = 0;
          for(let i = 0; i< this.arr.length;i++){
            this.totalcost += this.arr[i]?.quantity * this.arr[i].price;
          }
        });

      }
    })
  }

  deleteGustItem(item : any){
    let flag = false
    for(let i =0;i< this.arr.length;i++){

      if(this.arr[i].id == item.id){
        flag = true;
        continue;


      }

      this.temp.push(this.arr[i]);
      
       
    }
    localStorage.setItem("cartorder",JSON.stringify(this.temp));
    this.arr  =JSON.parse(localStorage.getItem("cartorder") || '[]');
    this.temp = []
    if(flag){
      console.log("befor" + this.totalcost)
      let total : number = item.quantity*item.price;
      this.totalcost = this.totalcost - total;
      console.log("after" + this.totalcost)
    }

  }




  calculateTotalCart(item : any){
      this.totalcost += item.quantity*item.price;

    

  }

  saveCartItem(item : any){
    this.arr.push(item);
        localStorage.setItem("cartorder",JSON.stringify(this.arr));
        this.arr  =JSON.parse(localStorage.getItem("cartorder") || '[]');
        this.calculateTotalCart(item);

        console.log(this.arr);


  }


  openDialog(){
    this.dialog.open(NavdialogComponent)

  }

}