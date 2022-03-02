import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupserviceService } from 'src/app/service/signupservice.service';

@Component({
  selector: 'app-create-accountant',
  templateUrl: './create-accountant.component.html',
  styleUrls: ['./create-accountant.component.css']
})
export class CreateAccountantComponent implements OnInit {

  form1 = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rolename: new FormControl('', [Validators.required]),
  });

  constructor(public services: SignupserviceService, private toaster: ToastrService) {}

  ngOnInit(): void {}

  Insertusers() {
    this.form1.patchValue({
      
      rolename:"accountant"
    })

   this.services.CreateUser(this.form1.value).subscribe((res)=>{
    this.toaster.success("Account created successfully");
  },
  (res)=>{
    console.log(res)
    this.toaster.error("Try Again");
  })
  }


}
