import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe',
})
export class PhonePipePipe implements PipeTransform {
  transform(number: String): String {
    return (
      '+33 ' +
      number.substring(1, 2) +
      '.' +
      number.substring(2, 4) +
      '.' +
      number.substring(4, 6) +
      '.' +
      number.substring(6, 8) +
      '.' +
      number.substring(8, 10)
    );
  }
}
