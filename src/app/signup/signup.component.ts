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

  user: any = [];
  ID_from_reg?: number;

  form1 = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  });

  form2 = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    userid: new FormControl('', [Validators.required]),
    rolename: new FormControl('', [Validators.required]),
    CafeId: new FormControl('', [Validators.required]),
  });

  constructor(public services: SignupserviceService) {}

  ngOnInit(): void {}

  Insertusers() {
    this.form1.patchValue({
      latitude: 0,
      longitude: 0,
      salary: 0,
    });
    this.services.insertUser(this.form1.value).subscribe((result) => {
        (this.user = result),
        (this.ID_from_reg = this.user.userid),
        this.form2.patchValue({
          rolename: 'Customer',
          CafeId: 25,
          userid: this.ID_from_reg,
        })
        this.services.inserLogin(this.form2.value);
    });
  }
  

}
