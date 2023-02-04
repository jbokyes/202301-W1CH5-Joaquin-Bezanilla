/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'PokeDex') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <header class="header">
    <img src="pokemon-logo.svg" alt="" srcset="">
    <h1 class = "title">${this.title}</h1>
    </header>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
