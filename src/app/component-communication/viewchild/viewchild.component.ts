import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {
  message = "Hello from Child!";

  changeMessage() {
    this.message = "Message Updated by Parent!";
  }


}
