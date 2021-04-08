import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { OrderActions, OrderActionType } from './actionCreators';
import { OrderState } from './contracts/state';

const initialOrderState: OrderState = {
  data: [],
  loadingState: LoadingState.NEVER,
};

// eslint-disable-next-line import/prefer-default-export
export const OrderReducer = produce(
  (draft: Draft<OrderState>, action: OrderActions) => {
    switch (action.type) {
      case OrderActionType.SET_OrderS:
        draft.data = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case OrderActionType.FETCH_Order:
        draft.data = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case OrderActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      default:
        break;
    }
  },
  initialOrderState
);
