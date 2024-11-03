import { NONE_TYPE } from '@angular/compiler';
import { Component, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationComponent {
  @ViewChild("para") paragraph;
  @ViewChildren("head") heading;
click(){
  console.log(this.paragraph.nativeElement.innerText);
  for (let ele of  this.heading)
    console.log(ele.nativeElement.innerText);
}
}
