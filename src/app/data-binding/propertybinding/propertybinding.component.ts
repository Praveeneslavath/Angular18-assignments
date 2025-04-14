import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  standalone: true,
  imports: [],
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.css'
})
export class PropertybindingComponent {
  isButtonDisabled = true;

  // Method to toggle the disabled state of the button.
  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

}
