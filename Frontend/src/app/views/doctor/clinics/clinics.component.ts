import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicDTO } from 'src/app/dtos/ClinicDTO';
import { Clinic } from 'src/app/dtos/Clinic';
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

  clinicDtos: Array<ClinicDTO> = []

  constructor(private router: Router) { }

  ngOnInit() {
    custom_navigation();
    custom_owl();
    custom_flex();
    custom_date_picker();
    custom_gallery();

    let con1 = new Clinic();
    let conDto1 = new ClinicDTO();
    con1.date = "2018-02-03";
    con1.patientsCount = 25;
    con1.time = "02:03";
    conDto1.clinic = con1;
    conDto1.clinicDtos = this.clinicDtos;
    this.clinicDtos.push(conDto1);

    let con2 = new Clinic();
    let conDto2 = new ClinicDTO();
    con2.date = "2018-08-03";
    con2.patientsCount = 26;
    con2.time = "05:03";
    conDto2.clinic = con2;
    conDto2.clinicDtos = this.clinicDtos;
    this.clinicDtos.push(conDto2);
  }

  addField() {
    let con = new Clinic();
    let conDto = new ClinicDTO();
    conDto.edit = true;
    conDto.clinic = con;
    conDto.clinicDtos = this.clinicDtos;
    this.clinicDtos.push(conDto);
  }

  changeData(consultation_row: HTMLElement) {
    console.log(consultation_row.children);
  }

}
