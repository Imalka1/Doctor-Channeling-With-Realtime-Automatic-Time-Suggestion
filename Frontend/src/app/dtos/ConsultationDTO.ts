import { Consultation } from "./Consultation";

export class ConsultationDTO {
    consultation: Consultation;
    edit: boolean;
    consultationDtos: Array<ConsultationDTO>;
}