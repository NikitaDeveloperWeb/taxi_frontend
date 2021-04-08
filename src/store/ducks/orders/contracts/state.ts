import { LoadingState } from '../../../types';

export interface Order {
  _id: string;
  operator: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  price: number;
  child: boolean;
  bagage: boolean;
  fulfilled: string;
}

export interface OrderState {
  data: Order[];
  loadingState: LoadingState;
}
