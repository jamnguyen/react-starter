import { createTheme, responsiveFontSizes } from '@mui/material';

import components from './components';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  components,
  palette,
  typography,
});

export default responsiveFontSizes(theme);
