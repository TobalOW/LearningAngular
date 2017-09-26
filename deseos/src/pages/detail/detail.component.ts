import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { List, ListItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
})
export class DetailComponent implements OnInit {
  idx:number;
  list:List;
  constructor(
    public navCtrl:NavController,
    public NavParams:NavParams,
    public _listaDeseos:ListaDeseosService,
    public alertCtrl:AlertController

  ) {
    this.idx = this.NavParams.get("idx");
    this.list = this.NavParams.get("list");
    console.log(this.list);
  }

  ngOnInit() {}

  update(item:ListItem){
    item.completed = !item.completed;
    let flag = true;
    for (let item of this.list.item){
      if(!item.completed){
        flag = false;
        break;
      }
    }

    this.list.finished = flag;
    this._listaDeseos.refresheData();
  }

  deleteItem(){

    let confirm = this.alertCtrl.create({
      title: this.list.nombre,
      message: '¿Estás Seguro?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseos.removeListService(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }





}
