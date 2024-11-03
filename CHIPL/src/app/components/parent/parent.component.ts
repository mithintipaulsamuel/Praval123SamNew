import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

 public sen="I am from parent component";
 test;
 @ViewChild(ChildComponent) var1;

 click() {
 console.log( this.var1.data);
 }


}
