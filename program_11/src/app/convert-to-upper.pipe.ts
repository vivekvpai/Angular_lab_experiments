import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToUpper',
})
export class ConvertToUpperPipe implements PipeTransform {
  transform(value: any): any {
    return value.toUpperCase();
  }
}
