import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {
  message = '';
  data = "";
  data1 = '';
  data2 = '';
  test(){
    this.message = "Hello world";
  }
  remove(){
    return this.data = 'welcome to angular';
  }
  go(){
    return this.data1 = "job done";
  }
  pressing(){
    this.data2 = "you preesed key in the keyboard";
  }


}
