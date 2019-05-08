import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../../../../services/login.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  accountType: string = 'patient';
  signupAllowed: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.checkForSignup(this.accountType)
  }

  login() {
    localStorage.setItem('login', 'true');
    this.router.navigate(['/head/main'])
  }

  checkForSignup(accountType) {
    if (accountType == 'patient') {
      this.signupAllowed = true;
    } else {
      this.signupAllowed = false;
    }
  }
}
