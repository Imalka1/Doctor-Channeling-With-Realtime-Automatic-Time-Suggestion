import { Component, OnInit, Input } from '@angular/core';
import { ClinicDTO } from 'src/app/dtos/ClinicDTO';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit-clinic.component.html',
  styleUrls: ['./edit-clinic.component.css']
})
export class EditClinicComponent implements OnInit {

  @Input() edit_clinicDto: ClinicDTO;

  constructor() { }

  ngOnInit() {
  }

  deleteData() {
    this.edit_clinicDto.clinicDtos.splice(this.edit_clinicDto.clinicDtos.indexOf(this.edit_clinicDto), 1)
  }

  acceptData() {
    this.edit_clinicDto.edit = false;
  }

}
