/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Menu, menuOptions } from './menu';

describe('Given Menu component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockMenu = menuOptions;
    const element = new Menu('slot', mockMenu);
    expect(element).toBeInstanceOf(Menu);
  });
});
