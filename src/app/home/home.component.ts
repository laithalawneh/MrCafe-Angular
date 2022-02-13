import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService) {

    this.spinner.show();
    setTimeout(() => {this.spinner.hide();}, 2000);

   }

  ngOnInit(): void {
  }

}
