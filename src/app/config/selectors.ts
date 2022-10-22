import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const selectAppConfig = createSelector(
  (state: RootState) => state.config,
  data => data,
);
