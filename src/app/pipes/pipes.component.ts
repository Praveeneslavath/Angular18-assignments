import { Component } from '@angular/core';
import { BuildinpipesComponent } from "./buildinpipes/buildinpipes.component";
import { CustomPipePipe } from './custom-pipe.pipe';
import { PureCustomPipe } from './pure-custom.pipe';
import { ImpureCustomPipe } from './impure-custom.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [BuildinpipesComponent, CustomPipePipe, PureCustomPipe, ImpureCustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  wish  = 'hello Hitachi'



  names: string[] = ['alice', 'bob'];
  addName() {
    const newName = prompt("Enter new person");
    if (newName) {
      this.names = [...this.names, newName]; // creates a new array (triggers pure pipe)
      console.log("person added with new reference");
  }
}

addNameImpure(){
  const newName=prompt("Enter a name");
  if(newName){
    this.names.push(newName);
    console.log("person added without new reference");
    
  }
}


}
