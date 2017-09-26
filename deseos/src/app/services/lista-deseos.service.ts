import { Injectable } from '@angular/core';
import { List } from '../classes/list';

@Injectable()
export class ListaDeseosService {
  lists: List[] = [];
  constructor() {
    this.loadData();
  }

  refresheData(){
    localStorage.setItem("data",JSON.stringify(this.lists));
  }

  loadData(){
    if (localStorage.getItem("data")) {

      this.lists = JSON.parse(localStorage.getItem("data"));
    }
  }
  addListService( list:List){
    this.lists.push(list);
    this.refresheData();
  }
  removeListService( idx:number){
    this.lists.splice(idx,1);
    this.refresheData();
  }

}
