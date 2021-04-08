import { call, put, takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { OrderAPI } from '../../../services/api/ordersApi';

import { LoadingState } from '../../types';
import {
  OrderActionType,
  setOrder,
  setOrderLoadingState,
} from './actionCreators';

export function* fetchOrderRequest() {
  try {
    const data = yield call(OrderAPI.fetchOrder);
    yield put(setOrder(data));
  } catch (error) {
    yield put(setOrderLoadingState(LoadingState.ERROR));
  }
}

export function* OrdersSaga() {
  yield takeLatest(OrderActionType.FETCH_Order, fetchOrderRequest);
}
