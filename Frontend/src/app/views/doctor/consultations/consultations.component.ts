import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Consultation } from 'src/app/dtos/Consultation';
import { ConsultationDTO } from 'src/app/dtos/ConsultationDTO';
declare var custom_gallery: any;
declare var custom_flex: any;
declare var custom_navigation: any;
declare var custom_owl: any;
declare var custom_date_picker: any;

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {
  consultationsDtos: Array<ConsultationDTO> = []

  constructor(private router: Router) { }

  ngOnInit() {
    custom_navigation();
    custom_owl();
    custom_flex();
    custom_date_picker();
    custom_gallery();

    let con1 = new Consultation();
    let conDto1 = new ConsultationDTO();
    con1.date = "2018-02-03";
    con1.patientsCount = 25;
    con1.time = "02:03";
    conDto1.consultation = con1;
    conDto1.consultationDtos = this.consultationsDtos;
    this.consultationsDtos.push(conDto1);

    let con2 = new Consultation();
    let conDto2 = new ConsultationDTO();
    con2.date = "2018-08-03";
    con2.patientsCount = 26;
    con2.time = "05:03";
    conDto2.consultation = con2;
    conDto2.consultationDtos = this.consultationsDtos;
    this.consultationsDtos.push(conDto2);
  }

  addField() {
    let con = new Consultation();
    let conDto = new ConsultationDTO();
    conDto.edit = true;
    conDto.consultation = con;
    conDto.consultationDtos = this.consultationsDtos;
    this.consultationsDtos.push(conDto);
  }

  changeData(consultation_row: HTMLElement) {
    console.log(consultation_row.children);
  }
}
