import { Clinic } from "./Clinic";

export class ClinicDTO {
    clinic: Clinic;
    edit: boolean;
    update: boolean;
    clinicDtos: Array<ClinicDTO>;
}