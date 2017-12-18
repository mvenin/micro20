import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Angular2 Bootstrap4 Navbar', menuType: MenuType.BRAND },
  { path: 'home', title: 'Home', menuType: MenuType.LEFT },
  { path: 'todo', title: 'Todos', menuType: MenuType.LEFT },
  { path: 'heroes', title: 'Heroes', menuType: MenuType.LEFT },
  { path: 'immobilis', title: 'Immobilis', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT },
  { path: 'logout', title: 'Logout', menuType: MenuType.RIGHT }
];
