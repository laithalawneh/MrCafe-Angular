import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { CafedashbordComponent } from './cafedashbord/cafedashbord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput,MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TeamComponent } from './team/team.component';
import { ProductComponent } from './product/product.component';
import { ToastrModule } from 'ngx-toastr';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CafesComponent } from './cafes/cafes.component';
import { ShopComponent } from './cafes/shop/shop.component';
import { PopularComponent } from './home/popular/popular.component';
import { DetailpageComponent } from './detailpage/detailpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    SliderComponent,
    LoginComponent,
    SignupComponent,
    TestimonialComponent,
    UserdashbordComponent,
    AdmindashbordComponent,
    AdmindashbordComponent,
    UserdashbordComponent,
    CafedashbordComponent,
    TeamComponent,
    ProductComponent,
    CafesComponent,
    ShopComponent,
    PopularComponent,
    DetailpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FormsModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
