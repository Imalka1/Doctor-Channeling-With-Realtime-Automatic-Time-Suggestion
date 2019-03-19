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

  constructor(private clinicsService: ClinicsService,private datePipe: DatePipe) { }

  ngOnInit() {
 
  }

  deleteData() {
    this.edit_clinicDto.clinicDtos.splice(this.edit_clinicDto.clinicDtos.indexOf(this.edit_clinicDto), 1)
  }

  saveData() {
    if (this.edit_clinicDto.clinic.date != undefined && this.edit_clinicDto.clinic.status != undefined && this.edit_clinicDto.clinic.time != undefined && this.edit_clinicDto.clinic.patientsCount != undefined) {
      this.clinicsService.saveClinic(this.edit_clinicDto.clinic).subscribe(
        (result) => {
          if (result) {
            this.edit_clinicDto.edit=false;
          }
        })
    }
  }

  minDate(){
    let latest_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return latest_date;
  }
}
