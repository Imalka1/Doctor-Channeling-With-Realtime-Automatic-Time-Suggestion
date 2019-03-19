import { Component, OnInit, Input } from '@angular/core';
import { ClinicDTO } from 'src/app/dtos/ClinicDTO';
import { ClinicsService } from 'src/app/services/clinics.service';

@Component({
  selector: 'app-fixed-clinic',
  templateUrl: './fixed-clinic.component.html',
  styleUrls: ['./fixed-clinic.component.css']
})
export class FixedClinicComponent implements OnInit {

  @Input() fixed_clinicDto: ClinicDTO;

  constructor(private clinicsService: ClinicsService) { }

  ngOnInit() {
  }

  changeClinic() {
    this.fixed_clinicDto.edit = true;
    this.fixed_clinicDto.update = true;
  }

  deleteClinic() {
    this.clinicsService.removeClinic(this.fixed_clinicDto.clinic).subscribe(
      (result) => {
        if (result) {
          this.fixed_clinicDto.clinicDtos.splice(this.fixed_clinicDto.clinicDtos.indexOf(this.fixed_clinicDto), 1)
        }
      })
  }

}
