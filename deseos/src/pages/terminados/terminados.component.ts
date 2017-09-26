import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(
                private _listaDeseos: ListaDeseosService,
                private navCtrl:NavController
            ) {  }

  ngOnInit() {}

  showDetail(list, i){

    this.navCtrl.push( DetailComponent, {list,i} );
  }
}
