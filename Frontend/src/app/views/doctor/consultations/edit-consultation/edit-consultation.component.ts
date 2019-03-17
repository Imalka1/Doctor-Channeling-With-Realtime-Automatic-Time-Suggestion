import { Component, OnInit, Input } from '@angular/core';
import { Consultation } from 'src/app/dtos/Consultation';
import { ConsultationDTO } from 'src/app/dtos/ConsultationDTO';

@Component({
  selector: 'app-edit-consultation',
  templateUrl: './edit-consultation.component.html',
  styleUrls: ['./edit-consultation.component.css']
})
export class EditConsultationComponent implements OnInit {
  @Input() edit_consultationDto: ConsultationDTO;

  constructor() { }

  ngOnInit() {
  }

  deleteData() {
    this.edit_consultationDto.consultationDtos.splice(this.edit_consultationDto.consultationDtos.indexOf(this.edit_consultationDto), 1)
  }

  acceptData() {
    this.edit_consultationDto.edit = false;
  }
}
