import { ListItem } from './list-item';

export class List{
  nombre:string;
  finished:boolean;
  item:ListItem[];

  constructor(nombre:string){
    this.nombre = nombre;
    this.finished = false;
  }
}
