/* eslint-disable no-unused-vars */
export class PokeApiRepo {
  url: string;
  constructor(public name: string = 'Pokemon') {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }
}
