import { PokeStructure } from '../../models/pokeModels';

/* eslint-disable no-unused-vars */
export interface PokeApiRepoStructure {
  loadPokemons(): Promise<PokeStructure[]>;
  update(pokemon: Partial<PokeStructure>): Promise<PokeStructure>;
}

export class PokeApiRepo {
  url: string;
  name!: string;
  constructor(public pokeName: string = 'Pokemon') {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  async loadPokemons(): Promise<PokeStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokeStructure[];
    return data;
  }

  async update(pokemon: Partial<PokeStructure>): Promise<PokeStructure> {
    const url = this.url + '/' + this.name;
    const resp = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(pokemon),
      headers: { 'Content-type': 'application/json' },
    });
    const data = (await resp.json()) as PokeStructure;
    return data;
  }
}
