import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "../../Modules/employee";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiRoot: string="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getEmpDetails(): Observable<Employee[]>{
    let url = `${this.apiRoot}/employees`;
    return this.http.get<Employee[]>(url);
  }
  
}
