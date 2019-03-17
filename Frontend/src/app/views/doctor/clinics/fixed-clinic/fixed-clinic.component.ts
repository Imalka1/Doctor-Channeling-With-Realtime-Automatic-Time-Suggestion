import { Component, OnInit, Input } from '@angular/core';
import { ClinicDTO } from 'src/app/dtos/ClinicDTO';

@Component({
  selector: 'app-fixed-clinic',
  templateUrl: './fixed-clinic.component.html',
  styleUrls: ['./fixed-clinic.component.css']
})
export class FixedClinicComponent implements OnInit {

  @Input() fixed_clinicDto: ClinicDTO;

  constructor() { }

  ngOnInit() {
  }

  changeData(){
    this.fixed_clinicDto.edit=true;
  }

  deleteData(){
    this.fixed_clinicDto.clinicDtos.splice(this.fixed_clinicDto.clinicDtos.indexOf(this.fixed_clinicDto), 1)
  }

}
