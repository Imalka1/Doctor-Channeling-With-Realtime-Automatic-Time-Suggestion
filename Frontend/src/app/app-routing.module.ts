import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from "./views/common/main-screen/main-screen.component";
import { ConsultationsComponent } from './views/doctor/consultations/consultations.component';
import { FixedConsultationComponent } from './views/doctor/consultations/fixed-consultation/fixed-consultation.component';
import { EditConsultationComponent } from './views/doctor/consultations/edit-consultation/edit-consultation.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent
  },
  {
    path: 'consultations',
    component: ConsultationsComponent,
    children: [
      {
        path: 'fixed-consultation',
        component: FixedConsultationComponent
      },
      {
        path: 'edit-consultation',
        component: EditConsultationComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
