import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  Categoryid?:number;
  Website:any=[];
  constructor(private http:HttpClient) { }

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
    return this.http.get('https://localhost:44368/api/Cafes/GetCofesByRateDec');
    
  }

  getwebsiteDetails(){
    return this.http.get('https://localhost:44368/api/WebSite/websiteDetails/3')
  }
}
