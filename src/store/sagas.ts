import { all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { OrdersSaga } from './ducks/orders/saga';

// eslint-disable-next-line import/no-cycle
import { userSaga } from './ducks/user/saga';
import { UsersSaga } from './ducks/users/saga';

export default function* rootSaga() {
  yield all([OrdersSaga(), userSaga(), UsersSaga()]);
}
