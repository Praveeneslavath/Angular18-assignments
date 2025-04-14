import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  user = {
    name: '',
    email: '',
    Phone: '',
    password: '',
    gender: '',
    terms: false
  };

  submitForm() {
    console.log('Form Submitted:', this.user);
  }

}
