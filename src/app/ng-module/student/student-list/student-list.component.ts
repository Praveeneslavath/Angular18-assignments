import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    
    this.studentService.getStudents();  // or any method you defined
  }

}
