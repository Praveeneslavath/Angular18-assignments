import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';
CustomPipePipe

@Component({
  selector: 'app-buildinpipes',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './buildinpipes.component.html',
  styleUrl: './buildinpipes.component.css'
})
export class BuildinpipesComponent {
  user = {
    name: 'John Doe',
    birthDate: '1990-05-15T00:00:00Z',
    balance: 1234.56,
    email: 'john.doe@example.com',
    active: true
  };
  wish="hello good morning";

  // Product price data
  productPrice = 99.99;

  // Numbers to demonstrate DecimalPipe, PercentPipe
  number = 0.1234;

  // List to demonstrate SlicePipe
  users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  // Example of plural usage
  itemsCount = 5;

  // The object for JSON formatting
  product = {
    name: 'Laptop',
    price: 1200,
    category: 'Electronics'
  };


}
