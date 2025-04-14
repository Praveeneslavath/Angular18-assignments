import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureCustom',
  standalone: true
})
export class ImpureCustomPipe implements PipeTransform {

  transform(value: string[]): string {
    console.log('Impure Pipe Called');
    return value.join(' | ');
  }

}
