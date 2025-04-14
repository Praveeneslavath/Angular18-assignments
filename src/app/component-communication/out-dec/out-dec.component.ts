import { Component, EventEmitter, Output } from '@angular/core';
EventEmitter

@Component({
  selector: 'app-out-dec',
  standalone: true,
  imports: [],
  templateUrl: './out-dec.component.html',
  styleUrl: './out-dec.component.css'
})
export class OutDecComponent {
  @Output() cdata = new EventEmitter<string>();
  send(){
    this.cdata.emit("hello Parent");
  }


}
