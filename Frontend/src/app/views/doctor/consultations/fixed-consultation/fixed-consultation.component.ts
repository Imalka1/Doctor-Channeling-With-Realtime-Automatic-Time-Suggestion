import { Component, OnInit, Input } from '@angular/core';
import { Consultation } from 'src/app/dtos/Consultation';
import { ConsultationDTO } from 'src/app/dtos/ConsultationDTO';

@Component({
  selector: 'app-fixed-consultation',
  templateUrl: './fixed-consultation.component.html',
  styleUrls: ['./fixed-consultation.component.css']
})
export class FixedConsultationComponent implements OnInit {
  @Input() fixed_consultationDto: ConsultationDTO;

  constructor() { }

  ngOnInit() {
  }

  changeData(){
    this.fixed_consultationDto.edit=true;
  }

  deleteData(){
    this.fixed_consultationDto.consultationDtos.splice(this.fixed_consultationDto.consultationDtos.indexOf(this.fixed_consultationDto), 1)
    // console.log(this.fixed_consultationDto.consultations.indexOf(this.fixed_consultationDto.consultation))
  }
}
