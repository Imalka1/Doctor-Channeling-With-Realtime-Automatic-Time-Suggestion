import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClinicDTO} from 'src/app/dtos/ClinicDTO';
import {Clinic} from 'src/app/dtos/Clinic';
import {ClinicsService} from 'src/app/services/clinics.service';
import {DatePipe} from '@angular/common';

// declare var custom_gallery: any;
// declare var custom_flex: any;
// declare var custom_navigation: any;
// declare var custom_owl: any;
// declare var custom_date_picker: any;

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {

  clinicDtos: Array<ClinicDTO> = new Array();
  months: Array<String> = new Array();
  years: Array<number> = new Array();
  minutes: Array<number> = new Array();
  monthIndex: number = 0;
  yearIndex: number = 0;
  date: Date;
  selectedMonth;
  selectedYear;
  dropdownMonthWidth;

  constructor(private router: Router, private clinicsService: ClinicsService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.setYearAndMonth();
    this.loadAllClinics();
    this.setWidthDropdownMonth();
    this.setMinutes();
  }

  // addField() {
  //   let canAdd: boolean = true;
  //   for (let i = 0; i < this.clinicDtos.length; i++) {
  //     if (this.clinicDtos[i].edit == true) {
  //       canAdd = false;
  //     }
  //   }
  //   if (canAdd) {
  //     let con = new Clinic();
  //     let conDto = new ClinicDTO();
  //     conDto.edit = true;
  //     conDto.clinic = con;
  //     conDto.clinic.status = "Pending";
  //     conDto.clinicDtos = this.clinicDtos;
  //     this.clinicDtos.push(conDto);
  //   }
  // }

  loadAllClinics() {
    var daysInMonth = this.daysInMonth();
    this.clinicDtos = new Array();
    for (let i = 0; i < daysInMonth; i++) {
      let clinic: Clinic = new Clinic();
      if (this.monthIndex + 1 < 10) {
        if ((i + 1) < 10) {
          clinic.clinicDate = new Date(this.yearIndex + '-0' + (this.monthIndex + 1) + '-0' + (i + 1));
        } else {
          clinic.clinicDate = new Date(this.yearIndex + '-0' + (this.monthIndex + 1) + '-' + (i + 1));
        }
      } else {
        if ((i + 1) < 10) {
          clinic.clinicDate = new Date(this.yearIndex + '-' + (this.monthIndex + 1) + '-0' + (i + 1));
        } else {
          clinic.clinicDate = new Date(this.yearIndex + '-' + (this.monthIndex + 1) + '-' + (i + 1));
        }
      }
      clinic.clinicTime = "00:00";
      clinic.patientsCount = 0;
      clinic.status = "Not yet";
      let conDto: ClinicDTO = new ClinicDTO();
      let date1: Date = new Date(this.yearIndex + '-' + (this.monthIndex + 1) + '-' + (i + 1));
      let date2: Date = new Date(this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate());
      if (this.datePipe.transform((date1), 'yyyy-MM-dd') == this.datePipe.transform((date2), 'yyyy-MM-dd')) {
        conDto.isToday = true;
      } else if (date1 < date2) {
        conDto.isPrevious = true;
      } else if (date1 > date2) {
        conDto.isNext = true;
      }
      conDto.edit = false;
      conDto.clinic = clinic;
      conDto.clinicDtos = this.clinicDtos;
      this.clinicDtos.push(conDto)
    }

    let clinic: Clinic = new Clinic();
    if (this.monthIndex + 1 < 10) {
      clinic.clinicDate = new Date(this.yearIndex + '-0' + (this.monthIndex + 1));
    } else {
      clinic.clinicDate = new Date(this.yearIndex + '-' + (this.monthIndex + 1));
    }
    this.clinicsService.getAllClinicsViaYearAndMonth(clinic).subscribe(
      (result) => {
        for (let i = 0; i < result.length; i++) {
          let clinic: Clinic = result[i];
          for (let j = 0; j < this.clinicDtos.length; j++) {
            if (this.clinicDtos[j].clinic.clinicDate.toISOString() == new Date(clinic.clinicDate).toISOString()) {
              this.clinicDtos[j].clinic._id = clinic._id;
              this.clinicDtos[j].clinic.status = clinic.status;
              this.clinicDtos[j].clinic.clinicTime = clinic.clinicTime;
              this.clinicDtos[j].clinic.patientsCount = clinic.patientsCount;
              break;
            }
          }
        }
      }
    )
  }

  daysInMonth() {
    return new Date(this.yearIndex, this.monthIndex + 1, 0).getDate();
  }

  setYearAndMonth() {
    this.date = new Date();
    this.monthIndex = this.date.getMonth();
    this.yearIndex = this.date.getFullYear();
    this.months.push('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    for (let i = this.yearIndex - 20; i < this.yearIndex + 6; i++) {
      this.years.push(i);
    }
    this.selectedYear = this.yearIndex;
    this.selectedMonth = this.months[this.monthIndex];
  }

  nextYear() {
    if (this.date.getFullYear() + 5 > this.yearIndex) {
      this.selectedYear = ++this.yearIndex;
    }
    this.loadAllClinics();
  }

  nextMonth() {
    if (this.monthIndex < 11) {
      this.selectedMonth = this.months[++this.monthIndex];
    } else {
      this.monthIndex = 0;
      this.selectedMonth = this.months[this.monthIndex];
    }
    this.loadAllClinics();
    this.setWidthDropdownMonth();
  }

  previousYear() {
    if (this.date.getFullYear() - 20 < this.yearIndex) {
      this.selectedYear = --this.yearIndex;
    }
    this.loadAllClinics();
  }

  previousMonth() {
    if (this.monthIndex > 0) {
      this.selectedMonth = this.months[--this.monthIndex];
    } else {
      this.monthIndex = 11;
      this.selectedMonth = this.months[this.monthIndex];
    }
    this.loadAllClinics();
    this.setWidthDropdownMonth();
  }

  changeMonth() {
    this.monthIndex = this.months.indexOf((this.selectedMonth));
    this.loadAllClinics();
    this.setWidthDropdownMonth();
  }

  changeYear() {
    this.yearIndex = this.selectedYear;
    this.loadAllClinics();
  }

  setWidthDropdownMonth() {
    switch (this.selectedMonth) {
      case this.months[0]:
        this.dropdownMonthWidth = '125px';
        break;
      case this.months[1]:
        this.dropdownMonthWidth = '140px';
        break;
      case this.months[2]:
        this.dropdownMonthWidth = '105px';
        break;
      case this.months[3]:
        this.dropdownMonthWidth = '85px';
        break;
      case this.months[4]:
        this.dropdownMonthWidth = '80px';
        break;
      case this.months[5]:
        this.dropdownMonthWidth = '82px';
        break;
      case this.months[6]:
        this.dropdownMonthWidth = '78px';
        break;
      case this.months[7]:
        this.dropdownMonthWidth = '115px';
        break;
      case this.months[8]:
        this.dropdownMonthWidth = '164px';
        break;
      case this.months[9]:
        this.dropdownMonthWidth = '130px';
        break;
      case this.months[10]:
        this.dropdownMonthWidth = '160px';
        break;
      case this.months[11]:
        this.dropdownMonthWidth = '158px';
        break;
      default:
        break;
    }
  }

  setMinutes() {
    for (let i = 0; i < 60; i++) {
      this.minutes.push(i + 1);
    }
  }

}
