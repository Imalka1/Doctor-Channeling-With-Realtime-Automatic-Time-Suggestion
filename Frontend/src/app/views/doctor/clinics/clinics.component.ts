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
  months: Array<String> = new Array();
  years: Array<number> = new Array();
  monthIndex: number = 0;
  year: number = 0;
  date: Date;
  selectedMonth;
  selectedYear;

  constructor(private router: Router, private clinicsService: ClinicsService) {
  }

  ngOnInit() {
    // custom_navigation();
    // custom_owl();
    // custom_flex();
    // custom_date_picker();
    // custom_gallery();
    this.setYearAndMonth();
    this.daysInMonth();
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
    this.clinicDtos = new Array();
    for (let i = 0; i < this.daysInMonth(); i++) {
      let clinic: Clinic = new Clinic();
      if (this.monthIndex + 1 < 10) {
        if ((i + 1) < 10) {
          clinic.clinicDate = this.year + '-0' + (this.monthIndex + 1) + '-0' + (i + 1);
        } else {
          clinic.clinicDate = this.year + '-0' + (this.monthIndex + 1) + '-' + (i + 1);
        }
      } else {
        if ((i + 1) < 10) {
          clinic.clinicDate = this.year + '-' + (this.monthIndex + 1) + '-0' + (i + 1);
        } else {
          clinic.clinicDate = this.year + '-' + (this.monthIndex + 1) + '-' + (i + 1);
        }
      }
      clinic.clinicTime = "00:00";
      clinic.patientsCount = 0;
      clinic.status = "Not yet";
      let conDto: ClinicDTO = new ClinicDTO();
      conDto.edit = false;
      conDto.clinic = clinic;
      conDto.clinicDtos = this.clinicDtos;
      this.clinicDtos.push(conDto)
    }

    let clinic: Clinic = new Clinic();

    this.clinicsService.getAllClinicsViaYearAndMonth(clinic).subscribe(
      (result) => {
        for (let i = 0; i < result.length; i++) {
          let clinic: Clinic = result[i];
          for (let j = 0; j < this.clinicDtos.length; j++) {
            if (this.clinicDtos[j].clinic.clinicDate+'T00:00:00.000Z' == clinic.clinicDate) {
              this.clinicDtos[j].clinic._id = clinic._id;
              this.clinicDtos[j].clinic.status = clinic.status;
              this.clinicDtos[j].clinic.clinicTime = clinic.clinicTime;
              this.clinicDtos[j].clinic.patientsCount = clinic.patientsCount;
            }
          }
        }
      }
    )
  }

  daysInMonth() {
    return new Date(this.year, this.monthIndex + 1, 0).getDate();
  }

  setYearAndMonth() {
    this.date = new Date();
    this.monthIndex = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.months.push('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    for (let i = this.year - 20; i < this.year + 6; i++) {
      this.years.push(i);
    }
    this.selectedYear = this.year;
    this.selectedMonth = this.months[this.monthIndex];
  }

  nextYear() {
    if (this.date.getFullYear() + 5 > this.year) {
      this.selectedYear = ++this.year;
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
  }

  previousYear() {
    if (this.date.getFullYear() - 20 < this.year) {
      this.selectedYear = --this.year;
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
  }

  changeMonth() {
    this.monthIndex = this.months.indexOf((this.selectedMonth));
    this.loadAllClinics();
  }

  changeYear() {
    this.year = this.selectedYear;
    this.loadAllClinics();
  }

  changeData(consultation_row: HTMLElement) {
    console.log(consultation_row.children);
  }

}
