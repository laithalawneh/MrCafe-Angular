import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http:HttpClient,private toaster:ToastrService) { }


  insertcontact(form:any){

    const headerDict={'Content-Type':'appliciation/json',
                    Accept:'appliciation/json'   
  
  };
  const requestOptions={
   headers:new HttpHeaders(headerDict)
  };

  this.http.post('https://localhost:44368/api/CountactUs/CreateCountactUs',form).subscribe((res)=>{
    this.toaster.success("","Send Message ")},(err)=>{this.toaster.warning("server is not available")})
  
  
}
}
