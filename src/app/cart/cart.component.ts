import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PayComponent } from '../pay/pay.component';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  arr : any =[]
  totalcost = 0

  userid=localStorage.getItem('userid')
  constructor(private cartAPI:CartserviceService,public dailog:MatDialog) { }

  ngOnInit(): void {
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


  gopay(){
  
    localStorage.setItem('totalcost',(this.totalcost+(this.totalcost*0.1)).toString())
    localStorage.setItem('cafeidfromcart',this.arr[0].cafeid)

    console.log(this.arr[0].cafeid)
    this.dailog.open(PayComponent)

  }

  
  deleteItem(id :number){
    console.log("kamelkamelkamel");
    this.cartAPI.deleteItem(id).subscribe(res =>{
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


  addItem(item : any, num : number){
    console.log(item);
    if(num == 1)
    item.quantity = item.quantity+1;
    else {
      if(item.quantity == 1){
       return this.deleteItem(item.id);
      }
      else 
      item.quantity = item.quantity-1;
    }
    let temp ={
      "id": item.id,
      "productid":item.productid,
      "userid":parseInt(localStorage.getItem("userid") || "1"),
      "quantity": item.quantity

    }
    this.cartAPI.updateItem(temp).subscribe(res => {
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


 
}