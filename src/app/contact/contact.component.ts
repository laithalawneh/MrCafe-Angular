import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactserviceService } from '../service/contactservice.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Name?:string
  senderemail?:string
subject?:string
message?:string

form1=new FormGroup({
  Name:new FormControl('',[Validators.required]),
  subject:new FormControl('',[Validators.required,Validators.email]),
  senderemail:new FormControl('',[Validators.required]),
  message:new FormControl('',[Validators.required])

})
  constructor(public services:ContactserviceService ,private toaster:ToastrService) { 

   
  }

  ngOnInit(): void {
  }
  InsertContact(){
   let object={
       
      name:this.Name,
      subject:this.subject,
      senderemail:this.senderemail,
       message:this.message
      }
    console.log(this.form1.value)
    this.services.insertcontact(this.form1.value)
   this.form1.controls["Name"].setValue('')
   this.form1.controls["subject"].setValue('')
   this.form1.controls["senderemail"].setValue('')
   this.form1.controls["message"].setValue('')


  }

  
}
