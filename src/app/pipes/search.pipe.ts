import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    console.log('searchText: ', searchText, 'items: ', items);
    if (!searchText) {
      return items;
    }
    if (searchText.length < 3) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
