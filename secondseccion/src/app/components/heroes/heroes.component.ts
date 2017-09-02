import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor( private _heroesServices:HeroesService) {
    console.log("constuctor");
   }
  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
    console.log(this.heroes);
  }

}
