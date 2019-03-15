import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalScreenComponent } from './views/hospital/hospital-screen/hospital-screen.component';
import { MainScreenComponent } from './views/common/main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalScreenComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
