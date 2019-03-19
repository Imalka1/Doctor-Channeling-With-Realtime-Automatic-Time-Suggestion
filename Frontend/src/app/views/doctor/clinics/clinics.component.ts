import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private clinicsService: ClinicsService) {

  }

  ngOnInit() {
    custom_navigation();
    custom_owl();
    custom_flex();
    custom_date_picker();
    custom_gallery();

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
          let conDto: ClinicDTO = new ClinicDTO();
          conDto.edit = false;
          conDto.clinic = clinic;
          conDto.clinicDtos = this.clinicDtos;
          this.clinicDtos.push(conDto)
        }
      }
    )
  }

  changeData(consultation_row: HTMLElement) {
    console.log(consultation_row.children);
  }

}
