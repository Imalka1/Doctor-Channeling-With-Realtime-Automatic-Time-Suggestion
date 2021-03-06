import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainScreenComponent} from "./views/common/main-screen/main-screen.component";
import {ClinicsComponent} from './views/doctor/clinics/clinics.component';
import {HeaderComponent} from './views/common/header/header.component';
import {PatientsComponent} from './views/doctor/patients/patients.component';
import {SigninComponent} from "./views/common/auth/signin/signin.component";
import {SignupComponent} from "./views/common/auth/signup/signup.component";
import {ForgotPasswordComponent} from "./views/common/auth/forgot-password/forgot-password.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {
    path: 'log-head',
    component: HeaderComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }
    ]
  },
  {
    path: 'head',
    component: HeaderComponent,
    children: [
      {
        path: 'main',
        component: MainScreenComponent
      }
    ]
  },
  {
    path: 'head',
    component: HeaderComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'clinics',
        component: ClinicsComponent
      },
      {
        path: 'patients',
        component: PatientsComponent
      }
    ]
  },
  {path: '', pathMatch: "full", redirectTo: '/head/main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
