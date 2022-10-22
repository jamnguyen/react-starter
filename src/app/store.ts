import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import ConfigReducer from './config';

const store = configureStore({
  reducer: {
    config: ConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

export * from './config';
