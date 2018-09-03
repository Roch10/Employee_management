import { Component, OnInit } from '@angular/core';
import { DESIGNATION } from '../Records/designationRecord';
import { Designation } from '../Modules/designation';
// import { EMPLOYEE } from '../Records/employeeRecord';

declare var $:any;

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  
  designation = DESIGNATION;
  oldStore: Designation;
  id:number;
  des: string;
  newDes: Designation;
  allowAdd: boolean;
  editDes: string;
  editID: number;
  rate: number;


  constructor() {
   }

  ngOnInit() {
    
  }

  onEdit(i){
    this.editDes = DESIGNATION[i].designation;
    this.rate = DESIGNATION[i].rate;
    this.editID = DESIGNATION[i].id;
    this.oldStore = Object.assign({}, DESIGNATION[i]);
    this.allowAdd = false;
  }

  onAddDes(){
    this.allowAdd = true;
  }

  // onCancel(i){
  //   DESIGNATION.splice(i, 1, this.oldStore);
  // }

  onSave(i:number){
    if (this.editDes != "") {
      DESIGNATION.forEach(d => {
        if (d.id === i) {
          d.designation = this.editDes.charAt(0).toUpperCase() + this.editDes.slice(1);
          d.rate = this.rate;
        }
      });   
    }else{
      alert("Designation can not be empty");
    }
     
  }

  onDelete(i){
    if(confirm("Are you sure you waant to delete?")){
          DESIGNATION.splice(i, 1);
          // DESIGNATION[i].designation = "";

    }
  }

  onAdd(){
    if (this.des != undefined) {
      this.id = DESIGNATION[DESIGNATION.length - 1].id + 1;
      
      this.newDes = {
        id: this.id,
        designation: this.des.charAt(0).toUpperCase() + this.des.slice(1),
        rate: this.rate
      }
      DESIGNATION.push(this.newDes);
      alert('New Designation Added!');
      this.des='';
      this.rate=null;
      console.log(this.newDes);
    } else {
      alert("Designation can not be empty");
    }
    
  }

  onCancelAdd(){
    this.id = null;
    this.des = '';
  }

  
}

