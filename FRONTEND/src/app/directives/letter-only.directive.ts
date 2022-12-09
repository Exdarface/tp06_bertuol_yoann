import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLetterOnly]',
})
export class LetterOnlyDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.onkeypress = (event: KeyboardEvent) => {
      if (
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.key.charCodeAt(0) < 65 ||
        event.key.charCodeAt(0) > 122
      ) {
        event.preventDefault();
        element.nativeElement.style.backgroundColor = 'red';
        return;
      }
      element.nativeElement.style.backgroundColor = 'white';
    };
  }
}
