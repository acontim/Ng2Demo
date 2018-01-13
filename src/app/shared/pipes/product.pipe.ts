import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {
  transform(value: number) {
    return 'Product: ' + value;
  }
}
