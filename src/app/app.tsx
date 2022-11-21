import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import theme from '~src/styles';

import Router from './router';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <CssBaseline>
            <Router />
          </CssBaseline>
        </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
