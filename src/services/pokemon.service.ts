import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pokemon } from 'src/app/Components/Form/form-table/pokemon';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  SERVER_URL = 'https://pokeapi.co/api/v2';

  constructor(private http:HttpClient) { }

  public getPokemon(){
    return this.http.get<any>(`${this.SERVER_URL}/pokemon`);
  }
}
