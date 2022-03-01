import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  Categoryid?:number;
  Website:any=[];
  constructor(private http:HttpClient , private toaster:ToastrService) { }

  getCategory(){
    return this.http.get('https://localhost:44368/api/Category/GetAllCategories');
    
  }

  GetAllacceptedtestimonial(){
    return this.http.get('https://localhost:44368/api/Testimonial/GetAllacceptedtestimonial');
    
  }
  getproductbyCategory(){
    return this.http.get('https://localhost:44368/api/Product/productbyCategory/'+this.Categoryid);  
  }

  getPopularCafes(){
    return this.http.get('https://localhost:44368/api/cafes/GetTopCafes');
    
  }

  getwebsiteDetails(){
    return this.http.get('https://localhost:44368/api/WebSite/websiteDetails/3')
  }

  inserttestimonial(form:any){

    const headerDict={'Content-Type':'appliciation/json',
                    Accept:'appliciation/json'   
  
  };
  const requestOptions={
   headers:new HttpHeaders(headerDict)
  };

  this.http.post('https://localhost:44368/api/Testimonial/CreatTestimonial',form).subscribe((res)=>{
    this.toaster.success("","Send Message ")},(err)=>{this.toaster.warning("server is not available")})
  
  
}
}
