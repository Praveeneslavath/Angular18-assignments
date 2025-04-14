import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureCustom',
  standalone: true
})
export class PureCustomPipe implements PipeTransform {
  transform(value: string[]): string {
    console.log('Pure Pipe Called');
    return value.join(', ');
  }


}
