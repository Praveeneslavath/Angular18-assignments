import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaydatabinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaydatabinding.component.html',
  styleUrl: './twowaydatabinding.component.css'
})
export class TwowaydatabindingComponent {
  profile = {
    peru : "Praveen",
    email : "p@gmail.com"

  }
  // selectedCity = '';
  person = {
    name: 'John',    // Initial name
    surname: 'Doe'   // Initial surname
  };

}
