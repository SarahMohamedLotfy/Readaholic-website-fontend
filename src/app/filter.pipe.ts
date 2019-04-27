import { Pipe, PipeTransform } from '@angular/core';
 /**
*Used in search .
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
*Used in search .
 */
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
/**
*Used in search for name of follower or following
 */
    return items.filter(it => {
      return it["name"].toLocaleLowerCase().includes(searchText);
    });
  }
}