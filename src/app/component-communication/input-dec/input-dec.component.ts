import { Component, input } from '@angular/core';
import { EventEmitter } from 'stream';
import {  Input } from '@angular/core';

@Component({
  selector: 'app-input-dec',
  standalone: true,
  imports: [InputDecComponent],
  templateUrl: './input-dec.component.html',
  styleUrl: './input-dec.component.css'
})
export class InputDecComponent {
  @Input() cdata = '';
  test:boolean=true;
  @Input() parr: {name:string; age:number; address:string} = {
    name:'',
    age: 0,
    address: ''
  }
 
}
