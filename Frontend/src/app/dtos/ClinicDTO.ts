import { Clinic } from "./Clinic";

export class ClinicDTO {
    id: String;
    clinic: Clinic;
    edit: boolean;
    clinicDtos: Array<ClinicDTO>;
}