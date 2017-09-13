import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  word:string = "";

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {

  }

  buscarArtistas(word:string){
    this._spotifyService.getArtistas(this.word).subscribe();
  }

}
