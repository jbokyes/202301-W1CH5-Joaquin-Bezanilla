/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Menu, menuOptions } from './components/menu/menu';
import './index.scss';
import fetchPokemon from './services/repository/fetch_pokemon';
new Header('header');
new Menu('header', menuOptions);
fetchPokemon();
// Prueba

/* const pikachu = new Pokemon(
  'pikachu',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
);
new Card('main', pikachu); */
