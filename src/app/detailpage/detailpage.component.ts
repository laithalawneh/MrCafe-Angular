import { Component, OnInit } from '@angular/core';
import { CafeserviceService } from '../service/cafeservice.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  products :any =[]
  cafename : string | null
  constructor(private cafeAPI:CafeserviceService) {
    this.products = this.cafeAPI.products;
    this.cafename = localStorage.getItem("cafename");
   }

  ngOnInit(): void {

  }


}
