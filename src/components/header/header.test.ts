import { Header } from './header';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Given Header component', () => {
  test('it should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockTitle = 'Test';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Header);
    const h1 = screen.getByRole('heading', { name: mockTitle });
    expect(h1).toBeInTheDocument();
  });
});
