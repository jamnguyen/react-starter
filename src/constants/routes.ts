import { Route } from '~src/interfaces';

export const ROUTES: Record<'HOME' | 'STYLE_GUIDE', Route> = {
  HOME: {
    path: '/',
    name: 'Home',
  },
  STYLE_GUIDE: {
    path: '/style-guide',
    name: 'Style Guide',
  },
};
