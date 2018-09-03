import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpEmployee } from "../Modules/http-employee";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiRoot: string="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getEmpDetails(): Observable<HttpEmployee[]>{
    let url = `${this.apiRoot}/employees`;
    return this.http.get<HttpEmployee[]>(url);
  }

  addEmployee( employee: HttpEmployee): Observable<any>{
    let url = `${this.apiRoot}/employees`;
    return this.http.post<HttpEmployee>(url, employee);

  }

  deleteEmployee(id: string):Observable<{}>{
    let url = `${this.apiRoot}/employees/${id}`;
    return this.http.delete(url);
  }

  updateEmployee( employee: any, id: string): Observable<any>{
    let url = `${this.apiRoot}/employees/${id}`;
    return this.http.patch<any>(url, employee);

  }

  
}
