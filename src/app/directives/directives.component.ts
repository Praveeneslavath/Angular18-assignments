import { Component } from '@angular/core';
import { AttributedirectiveComponent } from "./attributedirective/attributedirective.component";
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { CustomdirectivesDirective } from './customdirectives.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [AttributedirectiveComponent, StructuraldirectiveComponent, CustomdirectivesDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

}
