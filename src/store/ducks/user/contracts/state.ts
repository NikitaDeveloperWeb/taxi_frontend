import { LoadingState } from '../../../types';

export interface User {
  _id: string;
  firstname: string;
  username: string;
  password: string;
  lastname: string;
  passport: string;
  inn: string;
  address: string;
  date: string;
  position: string;
}

export interface UserState {
  data: User | undefined;
  status: LoadingState;
}
