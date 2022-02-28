import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import { CafeserviceService } from '../service/cafeservice.service';

@Component({
  selector: 'app-maphome',
  templateUrl: './maphome.component.html',
  styleUrls: ['./maphome.component.css']
})
export class MaphomeComponent implements OnInit {
  
 @ViewChild(GoogleMap, { static: false }) map: GoogleMap|any
 @ViewChild(MapInfoWindow, { static: true }) info: MapInfoWindow|any
 CafeList:any=[]     
  markers:any[]=[];
  selected_markar:any;
  infoWindow=new google.maps.InfoWindow();
  Currentlat:number=0;
  Currentlon:number=0;
  infoContent :string= ''
  zoom :number = 12
  center: google.maps.LatLngLiteral | any
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 100,
    minZoom: 100,
  }
  constructor(public CafeAPI:CafeserviceService ,private router:Router) { 

    this.CafeMarker()
    
    
  }
  

  ngOnInit() {
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.Currentlat=position.coords.latitude;
      this.Currentlon=position.coords.longitude;

        this.markers.push({
          position: {
            lat: this.Currentlat ,
            lng: this.Currentlon 
          },
          label: {
            color: 'red',
            text: 'My Current location ',
          },
          title: 'Marker title ' + (this.markers.length + 1),
          info: 'Marker info ' + (this.markers.length + 1),
          options: { animation: google.maps.Animation.DROP },
          
          
        })
     

    })
  }

  click(event: google.maps.MapMouseEvent) {
    console.log(event)
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info '+ (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })
  }

  CafeMarker(){
    this.CafeAPI.getAllCafes().subscribe(result=>{
      this.CafeList=result;
      const infoWindow=new google.maps.InfoWindow();
        this.CafeList.forEach( (item: any) => {
          this.markers.push({
                  position: {
                    lat: item.latitude ,
                    lng: item.longitude 
                  },
                  label: {
                    color: 'blue',
                    text: item.cafesname+'Cafe'+item.cafeid,
                  },
                  title: item.cafesname+'  '+'Rate : ' + item.rate,
                  info: item.cafeid,
                  clickable:true,
                  options: { animation: google.maps.Animation.DROP },
        
                });

          // marker.addListener('Click',()=>{
          //   infoWindow.close();
          //   infoWindow.setContent(marker.getTitle());
          //   infoWindow.open(marker.getMap(),marker)
          // });

          // this.markers.push(marker);
    });
    });
  }
  gotoCafe(id:number) {

    console.log("Cafe : "+id)
    //this.CafeAPI.getProductsByCafe(id)
    
  }

  openInfo(marker: MapMarker) {
    //this.infoContent = content
    //this.info.open(marker)
  }

}
