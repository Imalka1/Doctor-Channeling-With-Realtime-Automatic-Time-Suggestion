import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalScreenComponent } from './views/hospital/hospital-screen/hospital-screen.component';
import { MainScreenComponent } from './views/common/main-screen/main-screen.component';
import { HeaderComponent } from './views/common/header/header.component';
import { FooterComponent } from './views/common/footer/footer.component';
import { ChannelingsComponent } from './views/patient/channelings/channelings.component';
import { ClinicsComponent } from './views/doctor/clinics/clinics.component';
import { EditClinicComponent } from './views/doctor/clinics/edit-clinic/edit-clinic.component';
import { FixedClinicComponent } from './views/doctor/clinics/fixed-clinic/fixed-clinic.component';
import { HttpClientModule } from '@angular/common/http';
import { ClinicsService } from './services/clinics.service';
import { DatePipe } from '@angular/common';
import { PatientsComponent } from './views/doctor/patients/patients.component';
import { SigninComponent } from './views/common/auth/signin/signin.component';
import { SignupComponent } from './views/common/auth/signup/signup.component';
import { ForgotPasswordComponent } from './views/common/auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalScreenComponent,
    MainScreenComponent,
    HeaderComponent,
    FooterComponent,
    ChannelingsComponent,
    ClinicsComponent,
    EditClinicComponent,
    FixedClinicComponent,
    PatientsComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    ClinicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
