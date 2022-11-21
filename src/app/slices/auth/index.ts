import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { User } from '~src/interfaces';

import { signIn, signOut, updateUser } from './actions';

const initialState: {
  initialized: boolean;
  user?: User;
} = {
  initialized: false,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signOut.fulfilled, state => {
      state.user = undefined;
    });
    builder.addMatcher(
      isAnyOf(signIn.fulfilled, updateUser),
      (state, { payload }) => {
        state.user = payload;
        if (!state.initialized) {
          state.initialized = true;
        }
      },
    );
  },
});

export * from './selectors';
export * from './actions';

export { authSlice };
