import { Location, useLocation } from 'react-router-dom';

import { ROUTES } from '~src/constants';
import { Route } from '~src/interfaces';

export function useRoute(): Location & { route: Route } {
  const location = useLocation();

  if (location.pathname === '/') return { ...location, route: ROUTES.HOME };

  const paths: Route[] = [];
  location.pathname
    .replace(/[?].*/g, '')
    .split('/')
    .reduce((acc, current) => {
      const path =
        acc === '/' ? `/${current}` : acc ? `${acc}/${current}` : '/';

      const route: Route | undefined = Object.values(ROUTES).find(
        item => item.path === path,
      );
      paths.push(route || ROUTES.HOME);

      return path;
    }, '');

  const routes = paths.slice(-2);
  const route = routes.pop() as Route;

  if (routes.length >= 1) {
    route.parent = routes.pop() as Route;
  }

  return { ...location, route };
}
