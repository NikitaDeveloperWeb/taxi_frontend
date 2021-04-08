/* eslint-disable import/no-duplicates */
// eslint-disable-next-line spaced-comment
//ts-ignore
// eslint-disable-next-line import/no-duplicates
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
// eslint-disable-next-line import/no-cycle
import { rootReducer } from './rootReducer';
// eslint-disable-next-line import/order
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-cycle
import rootSaga from './sagas';

import { UserState } from './ducks/user/contracts/state';
import { UsersState } from './ducks/users/contracts/state';
import { OrderState } from './ducks/orders/contracts/state';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  orders: OrderState;
  user: UserState;
  users: UsersState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
