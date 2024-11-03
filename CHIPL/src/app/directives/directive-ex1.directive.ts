import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveEx1]'
})
export class DirectiveEx1Directive {

  constructor(private _eleRefvarname:ElementRef) {
    this._eleRefvarname.nativeElement.style.background='blue';
   }

}
