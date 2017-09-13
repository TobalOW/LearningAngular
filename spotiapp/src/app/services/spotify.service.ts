import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlSearch:string = "https://api.spotify.com/v1/search";
  urlArtist:string = "https://api.spotify.com/v1/artists";

  constructor(private http:Http) { }

  getArtistas(word:string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCU41gxJPfB3Hniq6kZQmHSYZBGdA8uOUdc1D6q6ZbA_ZQ7a2hFzNEV8dU5JzgffT15E5cXZ7PPJsOTIh5VsQ');
    let query = `?q=${ word }&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get(url, {headers})
            .map( response =>{
              this.artistas = response.json().artists.items;
              console.log(this.artistas);

              return response.json().artists.items;
            });



  }
  getArtista(word:string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDFbQlEuBSuX224WBBnndPl8VRkfXsxH2illu0323zSB5cRaxOvGHhvvVXO1aL_CbyS-qPeFyCUSrS1oO1Rhw');
    let query = `/${ word }`;
    let url = this.urlArtist + query;

    return this.http.get(url, {headers})
            .map( response =>{
              this.artistas = response.json();
              console.log(this.artistas);

              // return response.json().artists.items;
            });



  }



}
