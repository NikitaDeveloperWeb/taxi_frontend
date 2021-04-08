/* eslint-disable import/no-cycle */
import { call, put, takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { AuthApi } from '../../../services/api/authApi';

import { LoadingState } from '../../types';
import { setUserData, setUserLoadingStatus } from './actionCreators';
import {
  FetchSignInActionInterface,
  UserActionType,
} from './contracts/actionTypes';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    const { data } = yield call(AuthApi.signIn, payload);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionType.FETCH_SIGN_IN, fetchSignInRequest);
}
