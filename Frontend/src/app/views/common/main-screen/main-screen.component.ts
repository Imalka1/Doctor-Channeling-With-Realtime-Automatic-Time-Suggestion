import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var custom_gallery: any;
declare var custom_flex: any;
declare var custom_navigation: any;
declare var custom_owl: any;
declare var custom_date_picker: any;

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    custom_navigation();
    custom_owl();
    custom_flex();
    custom_date_picker();
    custom_gallery();
  }

  isDoctor() {
    if (this.router.url == '/') {
      return true;
    } else {
      return false;
    }
  }
}
