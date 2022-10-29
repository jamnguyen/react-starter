import { Location, useLocation } from 'react-router-dom';
import { ROUTES } from '~src/constants/routes';
import { Route } from '~src/interfaces';

export default function useRoute(): Location & { route: Route } {
  const location = useLocation();

  if (location.pathname === '/') return { ...location, route: ROUTES.HOME };

  const paths: Route[] = location.pathname
    .split('/')
    .slice(-2)
    .map(path => {
      const found: Route | undefined = Object.values(ROUTES).find(item => item.path === `/${path}`);
      return found || ROUTES.HOME;
    }) as Route[];

  const route = paths.pop() as Route;
  if (paths.length >= 1) {
    route.parent = paths.pop() as Route;
  }

  return { ...location, route };
}
