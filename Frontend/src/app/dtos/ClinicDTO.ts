import { Clinic } from "./Clinic";

export class ClinicDTO {
    clinic: Clinic;
    edit: boolean;
    clinicDtos: Array<ClinicDTO>;
}