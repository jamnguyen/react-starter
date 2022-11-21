import { createTheme, responsiveFontSizes } from '@mui/material';

import components from './components';
import layout from './layout';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  components,
  palette,
  typography,
  layout,
});

export default responsiveFontSizes(theme);
