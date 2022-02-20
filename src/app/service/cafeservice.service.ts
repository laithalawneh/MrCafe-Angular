import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CafeserviceService {
  products:any=[]
  constructor(private http:HttpClient,private router:Router) {
    
   }

   getAllCafes(){
    return this.http.get('https://localhost:44368/api/Cafes/GetAllCafes');
    
  }

  getProductsByCafe(id:number|undefined){
    return this.http.get('https://localhost:44368/api/Product/productbyCafe/'+id).subscribe(

      (result)=>{



       this.products=result,


       this.router.navigate(['Home/detailpage'])


               },

       (error)=>console.log(error),

    )

  }
}
