import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicDTO } from 'src/app/dtos/ClinicDTO';
import { Clinic } from 'src/app/dtos/Clinic';
import { ClinicsService } from 'src/app/services/clinics.service';
declare var custom_gallery: any;
declare var custom_flex: any;
declare var custom_navigation: any;
declare var custom_owl: any;
declare var custom_date_picker: any;

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {

  clinicDtos: Array<ClinicDTO> = new Array();
  months: Array<String> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthIndex: number = 0;
  year: number = 0;
  date: Date;
  selectedMonth;

  constructor(private router: Router, private clinicsService: ClinicsService) {

  }

  ngOnInit() {
    // custom_navigation();
    // custom_owl();
    // custom_flex();
    // custom_date_picker();
    // custom_gallery();
    this.setYearAndMonth();
    this.loadAllClinics();
  }

  addField() {
    let canAdd: boolean = true;
    for (let i = 0; i < this.clinicDtos.length; i++) {
      if (this.clinicDtos[i].edit == true) {
        canAdd = false;
      }
    }
    if (canAdd) {
      let con = new Clinic();
      let conDto = new ClinicDTO();
      conDto.edit = true;
      conDto.clinic = con;
      conDto.clinic.status = "Pending";
      conDto.clinicDtos = this.clinicDtos;
      this.clinicDtos.push(conDto);
    }
  }

  loadAllClinics() {
    this.clinicsService.getAllClinics().subscribe(
      (result) => {
        for (let i = 0; i < result.length; i++) {
          let clinic: Clinic = result[i];
          // console.log(clinic._id)
          let conDto: ClinicDTO = new ClinicDTO();
          conDto.edit = false;
          conDto.clinic = clinic;
          conDto.clinicDtos = this.clinicDtos;
          this.clinicDtos.push(conDto)
        }
      }
    )
  }

  setYearAndMonth() {
    this.date = new Date();
    this.monthIndex = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.selectedMonth = this.months[this.monthIndex];
  }

  getYear() {
    return this.year;
  }

  nextYear() {
    this.year++;
  }

  nextMonth() {
    if (this.monthIndex < 11) {
      this.selectedMonth = this.months[++this.monthIndex];
    } else {
      this.year++;
      this.monthIndex = 0;
      this.selectedMonth = this.months[this.monthIndex];
    }
  }

  previousYear() {
    if (this.date.getFullYear() < this.year) {
      this.year--;
    }
  }

  previousMonth() {
    if (this.monthIndex > 0) {
      this.selectedMonth = this.months[--this.monthIndex];
    } else if (this.date.getFullYear() < this.year) {
      this.year--;
      this.monthIndex = 11;
      this.selectedMonth = this.months[this.monthIndex];
    }
  }

  changeMonth() {
    this.monthIndex = this.months.indexOf((this.selectedMonth));
  }

  changeData(consultation_row: HTMLElement) {
    console.log(consultation_row.children);
  }

}
