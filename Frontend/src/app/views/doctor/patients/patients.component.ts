import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  clinicDate: String;
  date: Date;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.clinicDate = this.route.snapshot.queryParamMap.get('clinicDate');
  }

  isToday() {
    this.date = new Date();
    if (this.clinicDate == this.date.toISOString().split('T')[0]) {
      return true;
    } else {
      return false;
    }
  }
}
