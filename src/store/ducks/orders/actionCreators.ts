import { Action } from 'redux';
import { LoadingState } from '../../types';
import { OrderState } from './contracts/state';

export enum OrderActionType {
  SET_OrderS = 'Orders/SET_OrderS',
  FETCH_Order = 'Orders/FETCH_Order',
  SET_LOADING_STATE = 'Orders/SET_LOADING_STATE',
}

export interface SetOrderActionInterface extends Action<OrderActionType> {
  type: OrderActionType.SET_OrderS;
  payload: OrderState['data'];
}

export interface FetchOrderActionInterface extends Action<OrderActionType> {
  type: OrderActionType.FETCH_Order;
}
export interface SetOrderLoadinStateActionInterface
  extends Action<OrderActionType> {
  type: OrderActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setOrder = (
  payload: OrderState['data']
): SetOrderActionInterface => ({
  type: OrderActionType.SET_OrderS,
  payload,
});

export const setOrderLoadingState = (
  payload: LoadingState
): SetOrderLoadinStateActionInterface => ({
  type: OrderActionType.SET_LOADING_STATE,
  payload,
});

export const fetchOrders = (): FetchOrderActionInterface => ({
  type: OrderActionType.FETCH_Order,
});

export type OrderActions =
  | SetOrderActionInterface
  | FetchOrderActionInterface
  | SetOrderLoadinStateActionInterface;
