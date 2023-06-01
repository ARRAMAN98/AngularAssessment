import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  departments : Department[] = [
  ];
  constructor(private departmentService : StudentService ) {}

  ngOnInit(): void {
    debugger;
    this.departmentService.getAllDepartment()
    .subscribe({
      next:(departments) => {
        debugger;
        console.log(departments);
        this.departments = departments;
      },
      error : (response) => {
        console.log(response);
      }
    })
  }

}
