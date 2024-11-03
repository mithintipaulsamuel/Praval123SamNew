import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {
  name:string="gfr"
myclick(aaa)
{
  this.name=aaa
}
varr;
doubleclick(aaa)
{
  this.varr=aaa
}
cccc:string
singleClick(cccc)
{
  this.cccc=cccc;
}
}
