import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~src/app/store';

export const selectAuth = createSelector(
  (state: RootState) => state.auth,
  data => data,
);
