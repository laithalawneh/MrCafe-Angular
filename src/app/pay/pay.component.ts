import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenserviceService } from '../service/authenservice.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  
  form1=new FormGroup({
 
    serialNumber:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  
  })
  totalcost:any=localStorage.getItem('totalcost')
  usrerid:any=localStorage.getItem("userid")
  cafeid:any=localStorage.getItem("cafeidfromcart")

  constructor(public paymentService:PaymentService,public authenservice:AuthenserviceService) { 
    this.cafeid=localStorage.getItem("cafeidfromcart")
    console.log(this.cafeid)
  }

  ngOnInit(): void {
  }


  PayCard(){
    
    let object={
      transtype: "paid",
      amount: parseFloat(this.totalcost),
      user_id: parseInt(this.usrerid),
      
      cafe_id: parseInt(this.cafeid)
    }
    
    let wallet=
    { 
    
      balance:parseFloat(this.totalcost),
      cafeid: parseInt(this.cafeid)
      
     }

     let payment=
     { 
     
       serialnumber: this.form1.controls["serialNumber"].value,
     
       balance:parseFloat(this.totalcost),
       password:this.form1.controls["password"].value
       
      }
    this.paymentService.payment(this.form1.value,wallet,payment,object,parseFloat(this.totalcost))


  }
}
