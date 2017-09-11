import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = 'Cristobal';
  nombre2 = 'Cristobal asDgdf Sejfs kgtTTs';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234456;
  moneda = 1000;
  heroe = {
    nombre:"Wolverine",
    clave: "Logan",
    edad: 400,
    direccion:{
      calle: "hola",
      numero: 12
    }
  }
  valordePromesa = new Promise( (resolve,reject) => {

    setTimeout( ()=>resolve('llego la data'),3500 )
  })

  fecha = new Date();
}
