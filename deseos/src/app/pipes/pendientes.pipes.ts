import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/list';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform(lists:List[], completed: boolean =false): List[] {

    let newList:List[] = [];
    for (let list of lists){
      if(list.finished == completed){
        newList.push(list);
      }
    }
    return newList;
  }
}
