import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
})

export class FormTableComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  totalRecords!: number;
  page: number = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.pokemonService
      .getPokemon()
      .subscribe((res) => {
        console.log(this.pokemons = res?.results)
        this.pokemons = res?.results,
        this.totalRecords = res.results.length
      });

  }

   search(event:Event):void{
    const target = event.target as HTMLInputElement;
    const value = target.value

    this.pokemons = this.pokemons.filter(pokemons => {
      return pokemons.name
      .toLowerCase()
      .includes(value)
    });
  }
}

