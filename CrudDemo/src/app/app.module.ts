import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/Employees/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { StudentlistComponent } from './Components/studentlist/studentlist/studentlist.component';
import { DepartmentlistComponent } from './Components/departmentlist/departmentlist/departmentlist.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { AddDepartmentComponent } from './Components/add-department/add-department.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    StudentlistComponent,
    DepartmentlistComponent,
    AddStudentComponent,
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
