import { PokeStructure } from '../../models/pokeModels';

/* eslint-disable no-unused-vars */
export interface PokeApiRepoStructure {
  loadPokemons(): Promise<PokeStructure[]>;
  update(pokemon: Partial<PokeStructure>): Promise<PokeStructure>;
}

export class PokeApiRepo {
  url: string;
  constructor(public pokeName: string = 'Pokemon') {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }
}
