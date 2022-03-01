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
  user:any=[]
  constructor(private http:HttpClient,private router:Router,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  sendEmail(form:any){
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
      }
      const requestOptions={
      headers:new HttpHeaders(headerDict)
      }
    
    this.http.post('https://localhost:44368/api/Login/SentEmailUser',form,requestOptions).subscribe((res)=>{
    })
  }


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


     this.http.post('https://localhost:44368/api/Login/GetLoginId',form).subscribe((result:any)=>{
       
     
     this.user=result
    console.log(this.user [0].userid)
    localStorage.setItem("userid",this.user [0].userid)
  
   
    
    })
  const response={
      token:result.toString()
    }
    var object:any=jwt_Decode(response.token)
    
  
    localStorage.setItem('Role',object.role)



localStorage.setItem('username',object.username)
if(object.role=='admin')
{
  
this.router.navigate(['Admin'])
}
else if(object.role=='user')
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


