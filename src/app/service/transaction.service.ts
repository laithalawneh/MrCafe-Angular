import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient,private toaster:ToastrService) { }



 Transacton(form:any){

    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
      }
      const requestOptions={
      headers:new HttpHeaders(headerDict)
      }

  this.http.post('https://localhost:44368/api/Transactions/CreatTrans',form,requestOptions).subscribe((res)=>{
   
  
  })
  

}

wallet(form:any){

  const headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
    const requestOptions={
    headers:new HttpHeaders(headerDict)
    }

    this.http.put('https://localhost:44368/api/Wallet/UpdateBayWallet',form,requestOptions).subscribe((res)=>{
 

  })


}


Payment(form:any){

  const headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
    const requestOptions={
    headers:new HttpHeaders(headerDict)
    }

    this.http.put('https://localhost:44368/api/Payment/UpdateBayPayment',form,requestOptions).subscribe((res)=>{
 

  })


}
}
