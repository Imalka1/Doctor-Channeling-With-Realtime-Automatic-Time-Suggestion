import { Component, OnInit, Input } from '@angular/core';
import { ClinicDTO } from 'src/app/dtos/ClinicDTO';
import { Clinic } from 'src/app/dtos/Clinic';
import { ClinicsService } from 'src/app/services/clinics.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit-clinic.component.html',
  styleUrls: ['./edit-clinic.component.css']
})
export class EditClinicComponent implements OnInit {

  @Input() edit_clinicDto: ClinicDTO;

  constructor(private clinicsService: ClinicsService, private datePipe: DatePipe) { }

  ngOnInit() {

  }

  deleteClinic() {
    if (this.edit_clinicDto.update) {
      this.clinicsService.removeClinic(this.edit_clinicDto.clinic).subscribe(
        (result) => {
          if (result) {
            this.edit_clinicDto.clinicDtos.splice(this.edit_clinicDto.clinicDtos.indexOf(this.edit_clinicDto), 1)
          }
        })
    } else {
      this.edit_clinicDto.clinicDtos.splice(this.edit_clinicDto.clinicDtos.indexOf(this.edit_clinicDto), 1)
    }
  }

  saveClinic() {
    if (this.edit_clinicDto.clinic.status != undefined && this.edit_clinicDto.clinic.clinicTime != undefined && this.edit_clinicDto.clinic.patientsCount != undefined) {
      if (this.edit_clinicDto.update) {
        this.clinicsService.updateClinic(this.edit_clinicDto.clinic).subscribe(
          (result) => {
            if (result) {
              this.edit_clinicDto.edit = false;
            }
          })
      } else {
        this.clinicsService.saveClinic(this.edit_clinicDto.clinic).subscribe(
          (result) => {
            if (result != undefined) {
              this.edit_clinicDto.clinic._id = result._id;
              this.edit_clinicDto.edit = false;
            }
          })
      }
    }
  }

  minDate() {
    let latest_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return latest_date;
  }
}
