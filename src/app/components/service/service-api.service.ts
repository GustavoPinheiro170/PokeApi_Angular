import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeInfo } from '../models/pokemon.models';

interface PokeList {
  results: Object
}

@Injectable({
  providedIn: 'root'
})

export class ServiceApiService {

  base_url: string = 'https://pokeapi.co/api/v2/pokemon/'

  base_search: string ='https://pokeapi.co/api/v2/item'

  effectsAbility: any;

  effectInfo: any;

  constructor(private http: HttpClient) { }

  getPokemons(): Promise<Object> {
    return this.http.get<PokeList>(this.base_url).toPromise<PokeList>()
    .then(pokemons =>  pokemons)
  }

  getPaginator(event: string): Promise<Object> {
    return this.http.get<PokeList>(event).toPromise<PokeList>()
    .then(paginator =>  paginator)
  }

  getSearchInput(event: string): Promise<Object>  {
     return this.http.get<PokeList>(`${this.base_search}/${event}`).toPromise<PokeList>()
    .then(search => search )
  }


  getInfoPokemon(event: string): Promise<PokeInfo> {
    return this.http.get<PokeInfo>(event).toPromise<PokeInfo>()
  }

  getInfoAbilities(event: any): Promise<PokeInfo> {
    return this.http.get<PokeInfo>(event).toPromise<PokeInfo>()
    .then((item: any) => this.effectsAbility = item.effect_entries)
  }


}
