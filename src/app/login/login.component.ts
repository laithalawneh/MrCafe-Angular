import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenserviceService } from '../service/authenservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form1=new FormGroup({
 
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  
  })
    constructor(public services:AuthenserviceService,private spinner:NgxSpinnerService) { }
  
    ngOnInit(): void {
    }
  
  
    login(){
    
      this.services.valid(this.form1.value);
    }
}
