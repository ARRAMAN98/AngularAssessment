import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDetails } from '../models/student.model';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseApiUrl : string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllStudents() : Observable<StudentDetails[]> {
    return this.http.get<StudentDetails[]>(this.baseApiUrl + '/api/Student');
 }
  addStudent(addStudentRequest : StudentDetails){
    return this.http.post<StudentDetails>(this.baseApiUrl + '/api/Student',addStudentRequest)
}
  getAllDepartment() : Observable<Department[]> {
    return this.http.get<Department[]>(this.baseApiUrl + '/api/Department');
}
  addDepartment(addDepartmentRequest : Department){
    return this.http.post<Department>(this.baseApiUrl + '/api/Department',addDepartmentRequest)
}
// updateEmployee(id : string, updateEmployeeRequest : StudentDetails): Observable<StudentDetails> {
//   return this.http.put<StudentDetails>(this.baseApiUrl + '/api/Employee/' + id);
// }
// deleteEmployee(id : string): Observable<StudentDetails> {
//   return this.http.delete<StudentDetails>(this.baseApiUrl + '/api/Employee/' + id);
// }

}