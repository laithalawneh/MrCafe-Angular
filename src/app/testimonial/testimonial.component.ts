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

  form1=new FormGroup({
    Name:new FormControl('',[Validators.required]),
    message:new FormControl('',[Validators.required])
  
  })
  constructor(public HomeAPI:HomeserviceService) {
    this.HomeAPI.GetAllacceptedtestimonial().subscribe(result=>{
      console.log(result)
      this.Allacceptedtestimonial=result});
   }

  ngOnInit(): void {
  }

  InsertContact(){
    
   }
}
