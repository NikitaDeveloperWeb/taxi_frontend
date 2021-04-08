import { call, put, takeLatest } from 'redux-saga/effects';
import { usersAPI } from '../../../services/api/usersApi';
import { LoadingState } from '../../types';
import { UserActionType, setUser, setUserLoadingState } from './actionCreators';

export function* fetchUserRequest() {
  try {
    const data = yield call(usersAPI.fetchUser);
    yield put(setUser(data));
  } catch (error) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* UsersSaga() {
  yield takeLatest(UserActionType.FETCH_User, fetchUserRequest);
}
