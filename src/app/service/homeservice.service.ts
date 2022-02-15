import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  
  constructor(private http:HttpClient) { }

  getCategory(){
    return this.http.get('https://localhost:44368/api/Category/GetAllCategories');
    
  }

}
