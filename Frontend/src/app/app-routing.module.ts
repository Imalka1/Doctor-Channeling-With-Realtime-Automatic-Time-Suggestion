import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainScreenComponent} from "./views/common/main-screen/main-screen.component";
import { ConsultationsComponent } from './views/doctor/consultations/consultations.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent
  },
  {
    path: 'consultations',
    component: ConsultationsComponent
  },
  // {
  //   path: '#t/register',
  //   component: TouristRegisterComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
