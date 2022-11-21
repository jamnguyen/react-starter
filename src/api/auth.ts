import { SignInForm } from '~src/interfaces';

import { API } from './axios';
import { URL_SIGN_IN } from './constants';

export async function signIn(form: SignInForm) {
  return API.post(URL_SIGN_IN, form);
}
