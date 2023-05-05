import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carNumber'
})
export class CarNumberPipe implements PipeTransform {

  transform(value: string): string {
    // Remove any non-alphanumeric characters from the car number
    value = value.replace(/[^a-zA-Z0-9]/g, '');

    // Split the car number into groups of two characters each
    const groups = value.match(/.{1,2}/g);

    // Join the groups with hyphens and return the formatted car number
    return groups.join('-').toUpperCase();
  }

}
