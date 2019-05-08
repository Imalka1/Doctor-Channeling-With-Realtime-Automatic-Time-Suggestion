import {Component, OnInit, AfterViewInit, AfterContentChecked, AfterContentInit} from '@angular/core';
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {LoginService} from "../../../services/login.service";

declare var custom_gallery: any;
declare var custom_flex: any;
declare var custom_navigation: any;
declare var custom_owl: any;
declare var custom_date_picker: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginButtonText: String = '';

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
    loginService.login.subscribe((value) => {
      this.setLoginText(value)
    })
  }

  ngOnInit() {
    custom_navigation();
    if (this.loginService.isLoggedIn()) {
      this.setLoginText(true)
    } else {
      this.setLoginText(false)
    }
    // custom_owl();
    // console.log(852)
    // custom_flex();
    // custom_date_picker();
    // custom_gallery();
  }

  setLoginText(logged) {
    if (logged) {
      this.loginButtonText = 'Sign out'
    } else {
      this.loginButtonText = 'Sign in'
    }
  }

  loginOrLogout() {
    if (this.loginService.isLoggedIn()) {
      localStorage.clear()
      this.loginService.setLoginOrLogout(false)
      this.router.navigate(['/head/main'])
    } else {
      this.router.navigate(['/log-head/signin'])
    }
  }

  // headerColor(){
  //   if (this.router.url == '/head/main') {
  //     return "";
  //   } else {
  //     return "header-bottoms";
  //   }
  // }

  isHomeActive() {
    if (this.router.url == '/head/main') {
      return "active";
    } else {
      return "";
    }
  }

  isLoginActive() {
    if (this.router.url == '/log-head/signin' || this.router.url == '/log-head/signup' || this.router.url == '/log-head/forgot-password') {
      return false;
    } else {
      return true;
    }
  }

  isPatientsPanel() {
    if (this.route.snapshot.queryParamMap.get('clinicDate') != undefined) {
      return true;
    } else {
      return false;
    }
  }
}
