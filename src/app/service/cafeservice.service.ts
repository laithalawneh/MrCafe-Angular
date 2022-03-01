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

  getProductsByCafe(id:number|undefined){
    return this.http.get('https://localhost:44368/api/Cafes/GetAllCafeProducts/'+id)

  }


  insertCafe(form:any){
    const headerDict = {
            'Content-Type': 'appliciation/json',
            Accept: 'appliciation/json',
          };
          const requestOptions = {
            headers: new HttpHeaders(headerDict),
          };
      
         this.http.post('https://localhost:44368/api/Cafes/CreateCafes', form).subscribe(
                    (res) => {
                      this.toaster.success('', 'Send Message ');
                    },
                    (err) => {
                      this.toaster.warning('server is not available');
                    }
                  );

        return this.http.post('https://localhost:44368/api/Cafes/GetCafeIdF', form)

  }

  inserLogin(form: any) {

        const headerDict = {
          'Content-Type': 'appliciation/json',
          Accept: 'appliciation/json',
        };
        const requestOptions = {
          headers: new HttpHeaders(headerDict),
        };
    
        this.http.post('https://localhost:44368/api/Login/CreateLogin', form)
          .subscribe(
            (res) => {
              this.toaster.success('', 'Send Message ');
            },
            (err) => {
              this.toaster.warning('server is not available');
            }
          );
      }

      GetCofesByRateAsc(){
        return this.http.get('https://localhost:44368/api/Cafes/GetCafeByAscendingRate');
    
      }
    
      GetCofesByRateDec(){
        return this.http.get('https://localhost:44368/api/Cafes/GetCofesByRateDec');
    
      }

}
