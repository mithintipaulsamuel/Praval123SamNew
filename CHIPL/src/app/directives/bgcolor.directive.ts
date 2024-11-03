import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBGColor]'
})
export class BGColorDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') c_color="red";
  @HostListener('mouseenter') c_onEnterrrr()
  {
    this.c_color="blue";
  }
  @HostListener('mouseleave') c_onLeaveee()
  {
    this.c_color="yellow";
  }
}
