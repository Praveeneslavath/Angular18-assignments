import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css'
})
export class StructuraldirectiveComponent {
  show:boolean=true;
  data = "";

  

  products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Headphones', price: 100 }
  ];
  userRole: string = 'admin';


}
