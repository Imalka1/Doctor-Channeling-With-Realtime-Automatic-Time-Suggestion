import {Clinic} from "./Clinic";

export class ClinicDTO {
  clinic: Clinic;
  edit: boolean;
  isToday: boolean;
  isPrevious: boolean;
  isNext: boolean;
  clinicDtos: Array<ClinicDTO>;

}
