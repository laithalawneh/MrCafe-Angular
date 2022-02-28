import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CafeserviceService } from 'src/app/service/cafeservice.service';

@Component({
  selector: 'app-signup-cafe',
  templateUrl: './signup-cafe.component.html',
  styleUrls: ['./signup-cafe.component.css']
})
export class SignupCafeComponent implements OnInit {
  user: any = [];
  ID_from_reg?: number;

  form1 = new FormGroup({
    cafesname:new FormControl('', [Validators.required]),
    rate : new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required]),
  });

  form2 = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    userid: new FormControl('', [Validators.required]),
    rolename: new FormControl('', [Validators.required]),
    CafeId: new FormControl('', [Validators.required]),
  });
  constructor(public services: CafeserviceService) { }
  ngOnInit(): void {
  }

  Insertusers() {
    this.form1.patchValue({
      latitude: 0,
      longitude: 0,
      rate:0
    });
    this.services.insertCafe(this.form1.value).subscribe((result) => {
        (this.user = result),
        (this.ID_from_reg = this.user.cafeid),
        this.form2.patchValue({
          rolename: 'Cafe',
          CafeId: this.ID_from_reg,
          userid: 0
        })
        this.services.inserLogin(this.form2.value);
    });
  }

}
