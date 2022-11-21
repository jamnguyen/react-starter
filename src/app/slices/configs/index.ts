import { createSlice } from '@reduxjs/toolkit';

import { ConfigsData } from '~src/interfaces';

const initialState: {
  initialized: boolean;
  data: ConfigsData;
} = {
  initialized: false,
  data: {
    logo: '/img/logo_img.svg',
  },
};

const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {},
});

export * from './selectors';

export { configsSlice };
