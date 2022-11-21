import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { signIn as apiSignIn } from '~src/api/auth';
import { User } from '~src/interfaces';
import { SignInForm } from '~src/interfaces/auth';

export const updateUser = createAction<User | undefined>('auth/update-user');

export const signIn = createAsyncThunk(
  'auth/sign-in',
  async (payload: SignInForm) => {
    const data = await apiSignIn(payload);

    return data.data as User;
  },
);

export const signOut = createAsyncThunk('auth/sign-out', async () => {
  // To call sign out API
  // signOut();

  // To clear localStorage
  return;
});
