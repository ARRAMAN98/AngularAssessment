import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Department } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{

  addDepartmentRequest : Department = {
    departmentId: 0,
    name :''
  };

  constructor(private departmentService : StudentService, private router : Router) {

  }
  ngOnInit(): void {
    
  }
  addDepartment(){
    this.departmentService.addDepartment(this.addDepartmentRequest)
    .subscribe({
      next : (department) => {
        this.router.navigate(['departments']);
      }
    })
  }
}
