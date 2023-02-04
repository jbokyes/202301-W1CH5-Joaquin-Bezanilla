/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Menu, menuOptions } from './components/menu/menu';
import './index.scss';
new Header('header');
new Menu('header', menuOptions);
