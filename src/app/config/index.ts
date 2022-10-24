import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  author: process.env.APP_AUTHOR,
  name: process.env.APP_NAME,
  version: process.env.APP_VERSION,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
});

export * from './selectors';

export default configSlice.reducer;
