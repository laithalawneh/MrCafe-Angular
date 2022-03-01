import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  Allacceptedtestimonial:any=[];

  form=new FormGroup({
    name:new FormControl('',[Validators.required]),
    testcontent:new FormControl('',[Validators.required]),
    id:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required])

  })
  constructor(public HomeAPI:HomeserviceService) {
    this.HomeAPI.GetAllacceptedtestimonial().subscribe(result=>{
      console.log(result)
      this.Allacceptedtestimonial=result});
   }

  ngOnInit(): void {
  }

  inserttestimonial(){

    this.form.patchValue({id: 0,status: 0 });
    console.log(this.form.value)
    this.HomeAPI.inserttestimonial(this.form.value)
   }
}
