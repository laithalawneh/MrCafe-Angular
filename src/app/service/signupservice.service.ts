import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  constructor(private http: HttpClient, private toaster: ToastrService) {}

  CreateUser(form:any){
    const headerDict = {
            'Content-Type': 'appliciation/json',
            Accept: 'appliciation/json',
          };
          const requestOptions = {
            headers: new HttpHeaders(headerDict),
          };

         /*  let temp={
            "fname":form.fname,
            "lname":form.lname,
            "email":form.email,
            "phone":form.email,
            "salary":form.salary,
            "userName":form.userName,
            "password":form.password,
            "rolename":form.rolename
          } */
          console.log(form);
      
         return this.http.post('https://localhost:44368/api/Users/CreatUser',form);
  }

  
}  

