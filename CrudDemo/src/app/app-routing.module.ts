import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/Employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { StudentlistComponent } from './Components/studentlist/studentlist/studentlist.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { DepartmentlistComponent } from './Components/departmentlist/departmentlist/departmentlist.component';
import { AddDepartmentComponent } from './Components/add-department/add-department.component';

const routes: Routes = [
  {
    path : '',
    component: EmployeeListComponent 
  },
  {
    path : 'employees',
    component: EmployeeListComponent 
  },  
  {
    path : 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path : 'employees/edit/:id',
    component: EditEmployeeComponent
  },
  {
    path : 'students',
    component: StudentlistComponent 
  },
  {
    path : 'students/add',
    component: AddStudentComponent  
  },
  {
    path : 'departments',
    component: DepartmentlistComponent 
  },
  {
    path : 'departments/add',
    component: AddDepartmentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
