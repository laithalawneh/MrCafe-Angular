import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CafeserviceService {
  products: any = [];
  constructor(private http: HttpClient, private router: Router , private toaster: ToastrService) {}

  getAllCafes() {
    return this.http.get('https://localhost:44368/api/Cafes/GetAllCafes');
  }

  getProductsByCafe(id: number | undefined) {
    return this.http
      .get('https://localhost:44368/api/Product/productbyCafe/' + id)
      .subscribe(
        (result) => {
          (this.products = result), this.router.navigate(['Home/detailpage']);
        },

        (error) => console.log(error)
      );
  }


  insertCafe(form:any){
    const headerDict = {
      'Content-Type': 'appliciation/json',
      Accept: 'appliciation/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log(form);
     return this.http.post("https://localhost:44368/api/Cafes/CreateCafes",form)

  }

  

}
