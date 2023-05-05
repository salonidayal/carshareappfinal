import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTransform'
})
export class NameTransformPipe implements PipeTransform {

  transform(name: string): string {
    const fname = name.trim().split(' ')[0];

    return "Welcome " + fname.charAt(0).toUpperCase() + fname.slice(1);
  }

}
