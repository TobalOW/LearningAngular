import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: '/body.component.html'
})
export class BodyComponent {

  frase:any = {
    mensaje: "Hola soy el mensaje",
    autor: "Autor de la frase",
  }

  personajes:string[] = ["p1","p2","p3","p4"];

  mostrar:boolean = false;


}
