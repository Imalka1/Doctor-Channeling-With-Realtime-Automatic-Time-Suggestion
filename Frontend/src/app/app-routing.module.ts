import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from "./views/common/main-screen/main-screen.component";
import { ClinicsComponent } from './views/doctor/clinics/clinics.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent
  },
  {
    path: 'clinics',
    component: ClinicsComponent,
    // children: [
    //   {
    //     path: 'fixed-consultation',
    //     component: FixedConsultationComponent
    //   },
    //   {
    //     path: 'edit-consultation',
    //     component: EditConsultationComponent
    //   }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
