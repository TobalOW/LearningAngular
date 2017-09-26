import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root =  PendientesComponent;
  tab3Root =  TerminadosComponent;

  constructor() {

  }
}
