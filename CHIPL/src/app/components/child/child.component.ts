import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  msg ="this msg is from child component";
  @Output() cMan = new EventEmitter();
  @Input() pname;
  public data="Mesg 1";
  m1(){
    return this.data;
  }


sendMessage() {
  this.cMan.emit(this.msg);
}
}
