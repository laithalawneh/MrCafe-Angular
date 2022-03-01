import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_Decode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { TransactionService } from './transaction.service';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public transaction:TransactionService ,private http:HttpClient,private router:Router,private toaster:ToastrService,private spinner:NgxSpinnerService) { 


  }
    CheckBalance(form:any,walet:any,pay:any,trans:any,count:any){

     
       
    this.http.post('https://localhost:44368/api/Payment/checkbalance',form).subscribe((result:any)=>{
          
     
      if(result[0].balance >=count){
    
        this.transaction.wallet(walet)
        this.transaction.Payment(pay)
        this.transaction.Transacton(trans)
        
        this.toaster.success("Payment completed successfully, thank you")}
        else{
          this.toaster.warning("Your balance is not enough")
        }
    })

    }





  payment(form:any,walet:any,pay:any,trans:any,ccount:any){

  
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
      }
      const requestOptions={
      headers:new HttpHeaders(headerDict)
      }
      this.spinner.show()
      setTimeout(()=>{​​​this.spinner.hide(); }​​​,1000);
  this.http.post('https://localhost:44368/api/Payment/getcheckcard',form,requestOptions).subscribe((result:any)=>{
        
  const response={
      token:result.toString()
    }
    var object:any=jwt_Decode(response.token)

     this.CheckBalance(form,walet,pay,trans,ccount)

  },(x)=>{this.toaster.warning("Serial Number or Password incorrect")})
   }
  }


