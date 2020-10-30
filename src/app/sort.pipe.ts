import { Pipe, PipeTransform } from '@angular/core';
import {Person} from './list.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Person[], args?: any): Person[] {
    return array.sort((a, b) => {
      if (a[args.property] < b[args.property]){
        return -1 * args.order;
      } else if ( a[args.property] > b[args.property]){
        return 1 * args.order;
      }
      else{
        return 0;
      }
    });
  }

}
