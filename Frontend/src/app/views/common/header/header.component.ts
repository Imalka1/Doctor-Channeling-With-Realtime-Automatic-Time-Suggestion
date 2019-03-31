import { Component, OnInit, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    custom_navigation();
    custom_owl();
    // custom_flex();
    // custom_date_picker();
    // custom_gallery();

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

  isPatientsPanel() {
    if (this.route.snapshot.queryParamMap.get('clinicDate') != undefined) {
      return true;
    } else {
      return false;
    }
  }
}
