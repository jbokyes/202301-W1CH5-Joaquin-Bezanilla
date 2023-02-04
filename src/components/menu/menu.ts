/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './menu.scss';
export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: 'Home', path: '/index' },
  { label: 'Mis Pokemon', path: '/favorites' },
  { label: 'Detalles', path: '/about' },
];

export class Menu extends Component {
  constructor(public selector: string, public menuOptions: MenuOption[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    const items = this.menuOptions
      .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
      .join(' ');
    return `
      <nav class="menu"><ul>${items}</ul></nav>
    `;
  }
}
