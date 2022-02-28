import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deliverysingup',
  templateUrl: './deliverysingup.component.html',
  styleUrls: ['./deliverysingup.component.css']
})
export class DeliverysingupComponent implements OnInit {

  constructor( private http:HttpClient , private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    Name:new FormControl('',[Validators.required]), 
    phone:new FormControl('',[Validators.required]), 
    UserName:new FormControl('',[Validators.required]), 
    password:new FormControl('',[Validators.required]), 
    Status:new FormControl('',[Validators.required]), 
    Salary:new FormControl('',[Validators.required])
  })


  inserDelivery(form : any){
    
    this.http.post('https://localhost:44368/api/Delivery/CreateDelivery',form).subscribe((result)=>{
      this.toaster.success("Delivery account Created")
    } , 
    (result)=>{
      this.toaster.error("failed to create delivery")
    })
  }
  
  CreateDelivery(){
    this.form.patchValue({
      Status: 0,
      Salary: 100,
    });
    this.inserDelivery(this.form.value);
  }

}
