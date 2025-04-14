import { Component } from '@angular/core';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [StringinterpolationComponent,PropertybindingComponent, EventbindingComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

}
