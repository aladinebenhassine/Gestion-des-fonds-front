import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string,type:string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    if(type== "fonds"){
    return items.filter((item: any) => {
      return item.nomFonds.toLowerCase().includes(searchText);
    });}
    if(type== "projets"){
      return items.filter((item: any) => {
        return item.promoteur.toLowerCase().includes(searchText);
      });}
    if(type== "users"){
      return items.filter((item: any) => {
        return item.email.toLowerCase().includes(searchText);
      });}
  }
}
