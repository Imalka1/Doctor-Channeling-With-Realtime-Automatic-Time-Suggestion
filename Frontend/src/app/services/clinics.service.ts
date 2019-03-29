import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clinic } from '../dtos/Clinic';
import { ClinicDTO } from '../dtos/ClinicDTO';

const URL = "/clinics";

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  constructor(private http: HttpClient) { }

  saveClinic(clinic: Clinic): Observable<Clinic> {
    return this.http.post<Clinic>(environment.backend_url + URL + "/addClinic", clinic);
  }

  updateClinic(clinic: Clinic): Observable<boolean> {
    return this.http.post<boolean>(environment.backend_url + URL + "/updateClinic", clinic);
  }

  cancelClinic(clinic: Clinic): Observable<boolean> {
    return this.http.post<boolean>(environment.backend_url + URL + "/cancelClinic", clinic);
  }

  removeClinic(clinic: Clinic): Observable<boolean> {
    return this.http.post<boolean>(environment.backend_url + URL + "/removeClinic", clinic);
  }

  getAllClinicsViaYearAndMonth(clinic: Clinic): Observable<Array<Clinic>> {
    return this.http.post<Array<Clinic>>(environment.backend_url + URL + "/getAllClinicsViaYearAndMonth", clinic);
  }

  // updateStudent(student: Student): Observable<boolean> {
  //   return this.http.post<boolean>(environment.backend_url + URL + "/updateStudent", student);
  // }
}
