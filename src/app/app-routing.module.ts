import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DesignationComponent } from './designation/designation.component';
import { HttpSampleComponent } from "./http-sample/http-sample.component";
import { HttpEmployeeComponent } from "./http-employee/http-employee.component";

const routes: Routes= [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  // {path: 'add-employee', component: AddEmployeeComponent},
  // {path: 'edit-employee/:id', component: AddEmployeeComponent},
  {path: 'designation', component: DesignationComponent},
  {path: 'httpSample', component: HttpSampleComponent},
  {path: 'httpEmployee', component: HttpEmployeeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
