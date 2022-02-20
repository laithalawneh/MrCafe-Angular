import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupserviceService } from '../service/signupservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ACCtaype?:string
  fname?:string
  lname?:string
  email?:string
  phone?:string
  latitude?:number
  longitude?:number
  salary?:number
  userName?:string
  password?:string
  userId?:number
  rolename?:string
  CafeId?:number

form1=new FormGroup({
  fname:new FormControl('',[Validators.required]),
  lname:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',[Validators.required]),
  latitude:new FormControl('',[Validators.required]),
  longitude:new FormControl('',[Validators.required]),
  salary:new FormControl('',[Validators.required]),
  userName:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
  userId:new FormControl('',[Validators.required]),
  rolename:new FormControl('',[Validators.required]),
  CafeId:new FormControl('',[Validators.required])

})
  constructor(public services:SignupserviceService ,private toaster:ToastrService) { 

   
  }

  ngOnInit(): void {
  }
  Insertusers(){
   
    this.form1.patchValue(
      {
    rolename: "Customer",
    latitude:0,
    longitude:0,
    salary:0,
    CafeId:2
    
     })
    this.services.insertUser(this.form1.value)
    
  }

  selectType(Acc:string)
  {
    this.ACCtaype=Acc;
    alert(this.ACCtaype)
    
  }

}
