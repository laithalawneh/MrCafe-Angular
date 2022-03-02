import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CafeserviceService } from 'src/app/service/cafeservice.service';
declare const L : any;
@Component({
  selector: 'app-signup-cafe',
  templateUrl: './signup-cafe.component.html',
  styleUrls: ['./signup-cafe.component.css']
})
export class SignupCafeComponent implements OnInit {
  

  form1 = new FormGroup({

    cafesname:new FormControl('', [Validators.required]),
    rate : new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rolename: new FormControl('', [Validators.required]),

  });
  constructor(public services: CafeserviceService, private toaster: ToastrService) { }
  
  Insertusers() {
    this.form1.patchValue({
      rate:0,
      rolename:"cafe"
    });
    this.services.insertCafe(this.form1.value).subscribe((res)=>{
          this.toaster.success("Account Created Sucssefully")
    },
    (res)=>{
          this.toaster.error("missing data")

    })
  }
  
  
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((pos)=>{
      
       const coords = [pos.coords.latitude,pos.coords.longitude];
       this.form1.patchValue({
        latitude:pos.coords.latitude,
        longitude:pos.coords.longitude
       })
        console.log(`lang ${pos.coords.longitude} lant ${pos.coords.latitude}`);
         var map = L.map('map').setView(coords, 13);
          L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FtZWxiZWxhbCIsImEiOiJjbDAxN2F0MDIwMnp4M2NwbDRidnB5bGdwIn0.Tm4hqOk8NcgSqTWfl2AB8g',
           { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18, id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, accessToken: 'your.mapbox.access.token' })
            .addTo(map); L.marker(coords,{draggable:true}).
            addTo(map).on('dragend',(event : any)=>{console.log(event.target._latlng)
            this.form1.patchValue({
              latitude:event.target._latlng.lat,
              longitude:event.target._latlng.lng
            })
            
            })
          });
  }

}
