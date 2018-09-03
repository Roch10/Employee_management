import { Injectable } from '@angular/core';
import { Employee } from './Modules/employee';
import { EMPLOYEE } from './Records/employeeRecord';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {

   }

   getEmployee() {
    return EMPLOYEE; 
   }
}
