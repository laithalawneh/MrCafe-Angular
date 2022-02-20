import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_Decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenserviceService {

  constructor(private http:HttpClient,private router:Router,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  valid(form:any){

  
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
      }
      const requestOptions={
      headers:new HttpHeaders(headerDict)
      }
      this.spinner.show()
      setTimeout(()=>{​​​this.spinner.hide(); }​​​,1000);
  this.http.post('https://localhost:44368/api/Login/getlogincheck',form,requestOptions).subscribe((result:any)=>{

  const response={
      token:result.toString()
    }
    var object:any=jwt_Decode(response.token)
    console.log(response.token)
    console.log(object.role)
    localStorage.setItem('Role',object.role)

localStorage.setItem('username',object.username)
if(object.role=='admin')
{
  
this.router.navigate(['Admin'])
}
else if(object.role=='Customer')
{

this.router.navigate(['Home'])
}
else if(object.role=='Cafe')
{
  this.router.navigate([''])
}
else if(object.role=='Delivery')
{
  this.router.navigate([''])
}
},(x)=>{this.toaster.warning("UserName or Password incorrect")})
   }
}


