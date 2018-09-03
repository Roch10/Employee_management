import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from "./employees.service";
import { HttpEmployee } from "../Modules/http-employee";
import { NgForm } from '../../../node_modules/@angular/forms';
import { IMyDpOptions } from "mydatepicker";

@Component({
  selector: 'app-http-employee',
  templateUrl: './http-employee.component.html',
  styleUrls: ['./http-employee.component.css']
})
export class HttpEmployeeComponent implements OnInit {

  employees: any;
  newEmployee: HttpEmployee;
  detail: any;
  loading: boolean = true;
  name: string;
  address: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  designationID: number;
  message: string;
  alert: boolean = false;
  index: number;
  allowEdit: boolean = false;
  @ViewChild ("addEmployeeForm") addEmpForm: NgForm;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  public model: any;
  
 
  constructor( private empService: EmployeeService ) { }

  ngOnInit() {
    this.getEmpDetails();
    
  }

  getEmpDetails(){
    this.empService.getEmpDetails().subscribe(details => {
      this.employees = details;
      this.loading = false;
      
    });
    // this.employees = this.detail.employees;
    // console.log(this.employees);
  }

  onAdd(){
    this.allowEdit = false;
      this.newEmployee = { //storing new employee records
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
        dob: this.model.formatted,
        gender: this.gender,
        designationId: this.designationID
      };
    this.empService.addEmployee(this.newEmployee)
  .subscribe(employee => {
    this.employees.push(employee.createdEmployee);
    this.message = employee.message;
    this.addEmpForm.reset();
    this.alert = false;
  });
  }

  onDelete(i: number){
    this.alert = true;
    this.index = i;
    
  }
  
  deleteEmployee(flag: boolean){
    if (flag) {
      this.empService.deleteEmployee(this.employees[this.index]._id)
                      .subscribe( result => {
                        this.employees.splice(this.index, 1); 
                      });
    } 
  
  }

  onEdit(i: number){
    this.index = i;
    this.employees.forEach(employee => {
      if (employee._id === this.employees[i]._id) {
        this.name = employee.name;
        this.address = employee.address;
        this.phone = employee.phone;
        this.email = employee.email;
        this.model = { formatted: employee.dob } ;
        this.gender = employee.gender;
        this.designationID = employee.designationId;
        
      }
      
    });
    this.allowEdit = true;
  }

  onUpdate(){
    let updatedEmployee = [
      { propName: "name", value: this.name},
      { propName: "address", value: this.address},
      { propName: "phone", value: this.phone},
      { propName: "email", value: this.email},
      { propName: "dob", value: this.model.formatted},
      { propName: "gender", value: this.gender},
      { propName: "designationId", value: this.designationID}
    ];
    return this.empService.updateEmployee(updatedEmployee, this.employees[this.index]._id).subscribe(employee => {
      this.getEmpDetails();
    });
  }

}
