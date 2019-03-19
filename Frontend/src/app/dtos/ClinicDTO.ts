import { Clinic } from "./Clinic";

export class ClinicDTO {
    id: String;
    clinic: Clinic;
    edit: boolean;
    update: boolean;
    clinicDtos: Array<ClinicDTO>;
}