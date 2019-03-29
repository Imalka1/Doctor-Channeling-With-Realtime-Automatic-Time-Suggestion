import { Clinic } from "./Clinic";

export class ClinicDTO {
    clinic: Clinic;
    edit: boolean;
    isToday: boolean;
    clinicDtos: Array<ClinicDTO>;

}