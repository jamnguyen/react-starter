export enum Role {
  user = 'user',
  admin = 'admin',
}

export interface User {
  avatar: string;
  email: string;
  username: string;
  role: Role[];
}

export interface SignInForm {
  username: string;
  password: string;
}
