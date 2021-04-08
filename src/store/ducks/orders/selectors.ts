import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { OrderState } from './contracts/state';

export const selectOrders = (state: RootState): OrderState => state.orders;

export const selectLoadingState = (state: RootState) =>
  selectOrders(state).loadingState;

export const SelectOrderItems = createSelector(
  selectOrders,
  (Orders) => Orders.data
);
