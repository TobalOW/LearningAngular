import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {
  nameList:string ="";
  nameItem:string ="";
  items:ListItem[] = [];
  constructor(
    public alertCtrl:AlertController,
    public navCtrl:NavController,
    public _listaDeseos:ListaDeseosService
  ) {  }

  ngOnInit() {}

  add(){
    if(this.nameItem.length == 0){
      return;
    }
    let item = new ListItem();
    item.nombre = this.nameItem;
    this.items.push(item);
    this.nameItem = "";
  }
  remove(i:number){
    this.items.splice(i,1);
  }

  addList(){
    if(this.nameList.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'Nombre de lista es necesario!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new List(this.nameList);
    lista.item = this.items;
    // this._listaDeseos.lists.push(lista);
    this._listaDeseos.addListService(lista);
    this.navCtrl.pop();

  }
}
