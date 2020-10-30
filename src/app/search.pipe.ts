import { Pipe, PipeTransform } from '@angular/core';
import {Person} from './list.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Person[], terms: string = ''): Person[] {
    if (!terms.trim()) {
      return items;
    }

    return items.filter( it => {
      const keys = Object.keys(it);
      let compareString: string = '';
      keys.forEach( key => {
        compareString += it[key];
      });
      return compareString.toLowerCase().indexOf(terms) !== -1;
    });
  }

}
