import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((x) => {
      return (
        x['name'].toString().toLowerCase().indexOf(searchText) !== -1 ||
        x['salary'].toString().toLowerCase().indexOf(searchText) !== -1
      );
    });
  }
}
