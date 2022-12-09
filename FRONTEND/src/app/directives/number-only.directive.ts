import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
})
export class NumberOnlyDirective {
  @Input() length: String = '';

  constructor(private element: ElementRef) {
    element.nativeElement.onkeypress = (event: KeyboardEvent) => {
      if (this.element.nativeElement.value.length < this.length) {
        element.nativeElement.style.backgroundColor = 'red';
        return;
      }
      element.nativeElement.style.backgroundColor = 'white';
      if (
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.key.charCodeAt(0) < 48 ||
        event.key.charCodeAt(0) > 57 ||
        this.element.nativeElement.value.length >= this.length
      ) {
        event.preventDefault();
        return;
      }
    };
  }
}
