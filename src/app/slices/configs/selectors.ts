import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~src/app/store';

export const selectAppConfigs = createSelector(
  (state: RootState) => state.configs,
  data => data,
);
