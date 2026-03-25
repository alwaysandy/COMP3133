import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    return value.replaceAll('-', ' ');
  }

}
