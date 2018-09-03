// import { Component, OnInit, ViewChild } from '@angular/core';
// import {Employee} from '../Modules/employee';
// import {EMPLOYEE} from '../Records/employeeRecord';
// import { DESIGNATION } from '../Records/designationRecord';
// import { ActivatedRoute } from "@angular/router";
// import {Router} from '@angular/router'
// // import { SlicePipe } from '../../../node_modules/@angular/common';
// import { NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-add-employee',
//   templateUrl: './add-employee.component.html',
//   styleUrls: ['./add-employee.component.css']
// })
// export class AddEmployeeComponent implements OnInit {

//   newRecord: Employee;
//   id: number;
//   name: string;
//   address: string;
//   phone: string;
//   email: string;
//   dob: string;
//   gender: string;
//   designationID: number;
//   designation = DESIGNATION;
//   des: string;
//   editMode = false;
//   employeeID: number;
//   employeeDetail: Employee[];
//   selectedDes = false;
//   store: Employee;
//   @ViewChild ("employeeForm") empForm: NgForm;


//   constructor(private route: ActivatedRoute, private router: Router) {
//     this.employeeID = parseInt(route.snapshot.params['id']);    //Retrieve id from router link
//    }

//   ngOnInit() {
//     if (this.employeeID >= 0) {   //Check if the button is edit or add
//       this.editMode= true;
//       this.employeeDetail= EMPLOYEE; 
      
//       this.employeeDetail.forEach(e => {     //For Employee Edit
//         if (this.employeeID === e.id) {
//           this.store = Object.assign({}, e);  //storing old employee record
//           this.id= e.id;
//           this.name = e.name;
//           this.address = e.address;
//           this.phone = e.phone;
//           this.email = e.email;
//           this.dob = e.dob;
//           this.gender = e.gender;
//           DESIGNATION.forEach(d => {     //Display Designation with id
//             if (d.id === e.designationID) {
//               this.des = d.designation;
//             }
//           });
//         }
        
//       });

//     }
    
    
//   }

//   onAdd(){
//     this.id = EMPLOYEE[EMPLOYEE.length-1].id + 1;  //auto-increment id
//     if (this.id != null && this.name != undefined && this.address != undefined && this.email != undefined && this.dob != undefined && this.gender != undefined && this.des != undefined ) {
//       this.router.navigateByUrl('/employees');

//       let year = this.dob.slice(0, 4);
//       let month = this.dob.slice(5, 7);
//       let day = this.dob.slice(8, 11);
//       let date = day + "/" + month + "/" + year;


//       DESIGNATION.forEach(d => {    //Storing the auto-incremented id 
//         if (d.designation === this.des) {
//           this.designationID = d.id;
//         }
//       });

//       this.newRecord = { //storing new employee records
//           id: this.id,
//           name: this.name,
//           address: this.address,
//           phone: this.phone,
//           email: this.email,
//           dob: date,
//           gender: this.gender,
//           designationID: this.designationID
//       }
//       EMPLOYEE.push(this.newRecord);    //append new record in employee array

//       alert("New Emploee Added Successfully!");
//       this.empForm.reset();
//       //Clear form
//       // this.id = null;
//       // this.name='' ;
//       // this.address='' ;
//       // this.phone= '' ;
//       // this.email='' ;
//       // this.dob= '' ;
//       // this.gender='' ;
//       // this.designationID = null;
//     } 
//   }

//   onCancel(){  //Cancel adding employee
    
//     if(confirm('Are you sure you want to cancel?')){
//       this.empForm.reset();
//       // this.id = null;
//       // this.name = '';
//       // this.address = '';
//       // this.phone = '';
//       // this.email = '';
//       // this.dob = '';
//       // this.gender = '';
//       // this.designationID= null;
//     }
//   }
  
//   onSave(){  //Save editied employee data
//     if (this.id != null && this.name != "" && this.address != "" && this.email != "" && this.dob != "" && this.gender != "" && this.des != "" ) {
//       EMPLOYEE.forEach(e => {
//         if (this.id == e.id) {
//           e.name= this.name;
//           e.address = this.address;
//           e.dob = this.dob;
//           e.phone = this.phone;
//           e.email = this.email;
//           e.gender = this.gender;
//           DESIGNATION.forEach(d => {
//             if (d.designation === this.des) {
//               e.designationID = d.id;
//             }
//           });
//         }
//       });
//       this.router.navigateByUrl('/employees');
//     } else{
//       alert("All Fields should be filled");
//     }
    
//   }

  
// }
