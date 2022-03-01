import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  url :string = "https://localhost:44368/api/CartOrder/"

  constructor(private http:HttpClient) { }


  addItem(data : any){
   return this.http.post(this.url+"CreateCartOrder",data);

  }

  deleteItem(id : number){
    return this.http.delete(this.url+"DeleteCartOrder/"+id);
  }

  updateItem(item : any){
    return this.http.put(this.url+"UpdateCartOrder",item);
  }

  getAllItems(id : number | "[]"){
    let data ={
      "userid" : id
    }

   return this.http.post(this.url+"getCartorderbyUserid",data);
  }

  
}