import { Component, ViewChild, viewChild } from '@angular/core';
import { InputDecComponent } from './input-dec/input-dec.component';
import { JsonPipe } from '@angular/common';
import { OutDecComponent } from "./out-dec/out-dec.component";
import EventEmitter from 'node:events';
import { NgContentComponent } from "./ng-content/ng-content.component";
import { ViewchildComponent } from './viewchild/viewchild.component';
import { LocalMessageService } from './local-message.service';


@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [InputDecComponent, JsonPipe, OutDecComponent, NgContentComponent, ViewchildComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.css'
})
export class ComponentCommunicationComponent {
  pdata = 'hello';
  person3 = {
    name: 'Alice',
    age: 25,
    address: '789 Oak St'
  };

  parentdata = '';
  got(pdata:string){
    this.pdata = pdata;
    
  }
  sendMessage() {
    alert('No way to Go!');
  }



  @ViewChild(ViewchildComponent) child!: ViewchildComponent;

  ngAfterViewInit() {
    console.log("Child message:", this.child.message); // Access child's property
  }

  updateChildMessage() {
    this.child.changeMessage(); // Call child's method
  }



  constructor(public ts:LocalMessageService){
    console.log('Hello service')

  }

  

}

  


