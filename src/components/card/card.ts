/* eslint-disable no-unused-vars */
import { Pokemon } from '../../models/pokeModels';
import { Component } from '../component/component';

export class Card extends Component {
  constructor(public selector: string, public pokemon: Pokemon) {
    super();
    this.pokemon = { ...pokemon };
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `<li>
    <img src ="${this.pokemon.image}"</img>
    <p>${this.pokemon.name}</p>
    <button>Add to favorites!</button>
    </li>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    // Agregar botón de favorito
  }
}
