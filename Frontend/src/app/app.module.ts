import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalScreenComponent } from './views/hospital/hospital-screen/hospital-screen.component';
import { MainScreenComponent } from './views/common/main-screen/main-screen.component';
import { ConsultationsComponent } from './views/doctor/consultations/consultations.component';
import { HeaderComponent } from './views/common/header/header.component';
import { FooterComponent } from './views/common/footer/footer.component';
import { ChannelingsComponent } from './views/patient/channelings/channelings.component';
import { EditConsultationComponent } from './views/doctor/consultations/edit-consultation/edit-consultation.component';
import { FixedConsultationComponent } from './views/doctor/consultations/fixed-consultation/fixed-consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalScreenComponent,
    MainScreenComponent,
    ConsultationsComponent,
    HeaderComponent,
    FooterComponent,
    ChannelingsComponent,
    EditConsultationComponent,
    FixedConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
