import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(
              private _listaDeseos: ListaDeseosService,
              private navCtrl:NavController
            ) {

              console.log(this._listaDeseos);

              }

  ngOnInit() {}
  goToAdd(){
    this.navCtrl.push( AddComponent );
  }
  showDetail(list, i){

    this.navCtrl.push( DetailComponent, {list,i} );
  }

}
