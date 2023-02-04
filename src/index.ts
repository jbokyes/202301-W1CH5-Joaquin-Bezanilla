/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { Card } from './components/card/card';
import { Header } from './components/header/header';
import { Menu, menuOptions } from './components/menu/menu';
import './index.scss';
import { Pokemon } from './models/pokeModels';
new Header('header');
new Menu('header', menuOptions);

// Prueba
const pikachu = new Pokemon(
  'pikachu',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
);
new Card('main', pikachu);
