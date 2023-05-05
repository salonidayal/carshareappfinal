import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeGreen]'
})
export class ChangeGreenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.fontWeight = 'bold';
   }

}
