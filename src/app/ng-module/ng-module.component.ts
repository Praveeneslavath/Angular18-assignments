import { Component } from '@angular/core';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

@Component({
  selector: 'app-ng-module',
  standalone: true,
  imports: [StudentListComponent, StudentDetailComponent],
  templateUrl: './ng-module.component.html',
  styleUrl: './ng-module.component.css'
})
export class NgModuleComponent {

}
