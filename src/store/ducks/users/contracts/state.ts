import { LoadingState } from '../../../types';

export interface Users {
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
  vo: string;
  car: string;
}

export interface UsersState {
  data: Users[];
  loadingState: LoadingState;
}
