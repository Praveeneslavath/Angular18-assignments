import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, StudentDetailComponent, StudentListComponent
  ]
})
export class StudentModule { }
