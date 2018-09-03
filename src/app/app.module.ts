import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BarRatingModule } from "ngx-bar-rating";
import { MyDatePickerModule } from "mydatepicker";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { FooterComponent } from './footer/footer.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignationComponent } from './designation/designation.component';
import { FilterPipe } from './PIpes/filter.pipe';
import { HttpSampleComponent } from './http-sample/http-sample.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { HighlightDirective } from './highlight.directive';
import { SortDataPipe } from './PIpes/sort-data.pipe';
import { HttpEmployeeComponent } from './http-employee/http-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    FooterComponent,
    // AddEmployeeComponent,
    DesignationComponent,
    FilterPipe,
    HttpSampleComponent,
    EditEmployeeComponent,
    HighlightDirective,
    SortDataPipe,
    HttpEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BarRatingModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
