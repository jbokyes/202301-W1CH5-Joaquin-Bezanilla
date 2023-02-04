/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'PokeDex') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <span class="header">
    <img src="pokemon-logo.svg" alt="" srcset="">
    <h1 class = "title">${this.title}</h1>
    <img class="evol" src="evol.jpg" alt="" srcset="">
    <span>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
