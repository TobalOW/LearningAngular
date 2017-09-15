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
    headers.append('authorization', 'Bearer BQCov8JCpfEZduNcjDAEM1PrON6CIzOe1k7ry9zhnuVqiG4N-832o7JUqJ4HXprjPy2jKEBrfkLhXl06k8o9gg');
    let query = `?q=${ word }&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get(url, {headers})
            .map( response =>{
              this.artistas = response.json().artists.items;
              return response.json().artists.items;
            });



  }
  getArtista(word:string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQAcDSrxtmWdLvrFTsnyxIXO3BZl-zWIWq9fYU5Dts2pz1B4ehXx5pDnpHcJDLwRDStFNuh86NZScyAV_dlm3w');
    let query = `/${ word }`;
    let url = this.urlArtist + query;

    return this.http.get(url, {headers})
            .map( response =>{
              console.log(response.json());
              return response.json();
            });



  }
  getTop(id_artista:string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQAcDSrxtmWdLvrFTsnyxIXO3BZl-zWIWq9fYU5Dts2pz1B4ehXx5pDnpHcJDLwRDStFNuh86NZScyAV_dlm3w');
    let query = `/${ id_artista }/top-tracks?country=US`;
    let url = this.urlArtist + query;

    return this.http.get(url, {headers})
            .map( response =>{
              console.log(response.json().tracks);
              return response.json().tracks;
            });



  }



}
