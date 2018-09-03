import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {Employee} from '../../Modules/employee';
import {EMPLOYEE} from '../../Records/employeeRecord';
import { DESIGNATION } from '../../Records/designationRecord';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router'
import { NgForm } from '@angular/forms';
import { IMyDpOptions } from "mydatepicker";

@Component({ 
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  @Input('getID') getID: number;
  @Output() close = new EventEmitter<boolean>();

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  public model: any;

  // closePop = false;

  newRecord: Employee;
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  designationID: number;
  designation = DESIGNATION;
  des: string;
  editMode = false;
  // getID: number;
  employeeDetail: Employee[];
  // selectedDes = false;
  store: Employee;
  rate: number;
  path: string[] = ['designation'];
  order: number = 1;
  @ViewChild ("employeeForm") empForm: NgForm;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    // this.getID = parseInt(route.snapshot.params['id']);    //Retrieve id from router link
   }

  ngOnInit() {
    this.checkStatus();
  }

  ngOnChanges(){
    this.checkStatus();
  }

  onAdd(){
    // let empId = EMPLOYEE[EMPLOYEE.length-1].id + 1;  //auto-increment id
    let lastId = 0;
    EMPLOYEE.forEach(emp => {
      if (lastId < emp.id) {
        lastId = emp.id;   
      }
    });
    let empId = lastId + 1;
    
    if (empId != null && this.name != undefined && this.address != undefined && this.email != undefined && this.model != undefined && this.gender != undefined && this.des != undefined ) {
      this.router.navigateByUrl('/employees');
     
      DESIGNATION.forEach(d => {    //Storing the auto-incremented id 
        if (d.designation === this.des) {
          this.designationID = d.id;
        }
      });
      this.newRecord = { //storing new employee records
          id: empId,
          name: this.name.charAt(0).toUpperCase() + this.name.slice(1),
          address: this.address.charAt(0).toUpperCase() + this.address.slice(1),
          phone: this.phone,
          email: this.email,
          dob: this.model.formatted,
          gender: this.gender,
          designationID: this.designationID,
          rate: this.rate
      }
      EMPLOYEE.push(this.newRecord);    //append new record in employee array
      // console.log(this.newRecord);
      alert("New Employee Added Successfully!");
      this.empForm.reset();
      this.rate = 0;
     
    } 
    this.close.emit(true);
  }

  onCancel(){  //Cancel adding employee
    
    if(confirm('Are you sure you want to cancel?')){
      this.empForm.reset();
      this.rate = 0;
      this.close.emit(true);
    }
    
  }
  
  onSave(){  //Save editied employee data
    if (this.id != null && this.name != "" && this.address != "" && this.email != "" && this.model != "" && this.gender != "" && this.des != "" ) {
      EMPLOYEE.forEach(e => {
        if (this.id == e.id) {
          // let year = this.dob.slice(0, 4);
          // let month = this.dob.slice(5, 7);
          // let day = this.dob.slice(8, 11);
          // let date = day + "/" + month + "/" + year;
          // console.log(date);

          e.name= this.name;
          e.address = this.address;
          e.dob = this.model.formatted;
          e.phone = this.phone;
          e.email = this.email;
          e.gender = this.gender;
          DESIGNATION.forEach(d => {
            if (d.designation === this.des) {
              e.designationID = d.id;
            }
          });
          e.rate = this.rate;
        }
      });
      // this.router.navigateByUrl('/employees');
      this.empForm.reset();
      this.rate = 0;
      this.close.emit(true);
      alert("Change has been saved");
      
    } else{
      alert("All Fields should be filled");
    }
    
  }

  checkStatus(){
    if (this.getID >= 0) {   //Check if the button is edit or add
      this.editMode= true;
      this.employeeDetail= EMPLOYEE; 
      
      
      this.employeeDetail.forEach(e => {     //For Employee Edit
        if (this.getID === e.id) {
          // let year = e.dob.slice(6, 10);
          // let month = e.dob.slice(3, 5);
          // let day = e.dob.slice(0, 2);
          // let date = year + "-" + month + "-" + day;
          console.log(e.dob);

          this.store = Object.assign({}, e);  //storing old employee record
          this.id= e.id;
          this.name = e.name;
          this.address = e.address;
          this.phone = e.phone;
          this.email = e.email;
          this.model = {formatted: e.dob};
          this.gender = e.gender;
          DESIGNATION.forEach(d => {     //Display Designation with id
            if (d.id === e.designationID) {
              this.des = d.designation;
            }
          });
          this.rate = e.rate;
        }
        
      });

    } else{
      this.editMode= false;
    }
  }
  

}
