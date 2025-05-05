import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = [
    { id: 1, name: 'Alice', course: 'Math' },
    { id: 2, name: 'Bob', course: 'Science' },
    { id: 3, name: 'Charlie', course: 'History' }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(s => s.id === id);
  }
}
