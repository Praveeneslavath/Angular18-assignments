import { Component } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  standalone: true,
  imports: [],
  templateUrl: './stringinterpolation.component.html',
  styleUrl: './stringinterpolation.component.css'
})
export class StringinterpolationComponent {
  username = 'To Hitachi Digital Service';
  sayHello() {
    alert('Hello, Angular!');
    
  }


}
