import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: `app.component.html`,
  styleUrls: [`app.component.css`]
})
export class AppComponent implements OnInit {

  public pokemons: Pokemon[];

  ngOnInit(){
    this.pokemons = POKEMONS;

  }

  selectPokemon(pokemon: Pokemon){
    alert("Vous avez cliqué sur " + pokemon.name);
  }
}
