import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../Modules/employee';
import { EMPLOYEE } from '../Records/employeeRecord';
import { EmployeeService } from '../employee.service';
import { DESIGNATION } from '../Records/designationRecord';
// import { EmployeeService } from "./service/employee.service";
import { NgModel } from '@angular/forms';
// import { ModalDirective } from "ngx-bootstrap/modal";
declare var $;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  passID: number;
  path: string[] = [''];
  order: number = 1;
  sortBy: string;

  employees: Employee[];
  allowEdit = false;
  allowPopUp = false;
  empDesId: number;
  desId: number;
  actualDes=[] ;
  test: any;
  number =[] ;
  closePopUp = false;
  


  constructor(private empService: EmployeeService) { 
    
  }

  ngOnInit() {
    this.employees = this.empService.getEmployee();
    // this.getEmpDetails();
    this.assignDes();
    console.log(this.employees);
    // this.employee.forEach(i => {
    //   this.allowEdit.push(false);      
    // });
    let num = 0;
    EMPLOYEE.forEach(e => {
      num = num +1;
      this.number.push(num);
    });
  }

  ngOnChanges(){
    this.assignDes();
  }

  // getEmpDetails(){
  //   this.empService.getEmpDetails().subscribe( employee => {
  //     this.employees = employee; 
  //   });
  // }

  sortTable(prop: string) {
    this.path = prop.split('.')
    // this.order = this.order * (-1); // change order
    return false; // do not reload
  }

  onSort(){
    this.sortTable(this.sortBy);
  }
  
  onDelete(i, name: string){
    if(confirm("Are you sure you want to delete the record of " + name + "?")){
      EMPLOYEE.splice(i, 1);
      // DESIGNATION.splice(i,1);
    }
  }


  assignDes(){
    EMPLOYEE.forEach(emp => {
      this.empDesId = emp.designationID;
      DESIGNATION.forEach(des => {
        this.desId = des.id;
        if (this.empDesId === this.desId) {
          if (this.allowEdit) {
            if(this.passID === emp.id){
              this.actualDes[EMPLOYEE.indexOf(emp)] = des.designation;
            }
          } else {
            this.actualDes.push(des.designation);
          }
          
        } 
      });
      if (this.actualDes[EMPLOYEE.indexOf(emp)] === undefined) {
        this.actualDes[EMPLOYEE.indexOf(emp)] = "";
        
      }      
    });
    // console.log(this.actualDes);
  }

  onEdit(i){
    this.passID = EMPLOYEE[i].id ;
    this.allowPopUp = true;
    this.allowEdit = true;
  }

  onAdd(){
    this.passID = -1;
    this.allowPopUp = true;
    this.allowEdit = false;
  }

  onCancel(){
    this.allowPopUp = false;
    this.passID= null;
    // this.assignDes(); // when save is clicked in child this method should be called
  }

  onClose(close: boolean){
    this.employees = this.empService.getEmployee();
    // this.getEmpDetails();
    $("#editEmployee").modal("hide");
    let desid = EMPLOYEE[EMPLOYEE.length - 1].designationID
    DESIGNATION.forEach(des => {
      if (des.id === desid) {
        this.actualDes.push(des.designation);
      }
      
    });
    this.passID = null;
    
  }
  
}
