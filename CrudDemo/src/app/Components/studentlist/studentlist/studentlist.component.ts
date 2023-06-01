import { Component, OnInit } from '@angular/core';
import { StudentDetails } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students : StudentDetails[] = [
  ];

  constructor(private studentservice: StudentService) {}

  ngOnInit(): void{
    this.studentservice.getAllStudents()
    .subscribe({
      next: (students) => {
        console.log(students);
        this.students = students; 
      },
      error: (response) => {
        console.log(response);
      } 
    })

  }

}
