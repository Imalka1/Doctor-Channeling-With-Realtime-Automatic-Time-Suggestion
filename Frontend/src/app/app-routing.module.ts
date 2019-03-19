import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from "./views/common/main-screen/main-screen.component";
import { ClinicsComponent } from './views/doctor/clinics/clinics.component';
import { HeaderComponent } from './views/common/header/header.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainScreenComponent
  // },
  {
    path: 'head',
    component: HeaderComponent,
    children: [
      {
        path: 'main',
        component: MainScreenComponent
      },
      {
        path: 'clinics',
        component: ClinicsComponent
      }]
  },
  { path: '', pathMatch: "full", redirectTo: '/head/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
