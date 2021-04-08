import { combineReducers } from 'redux';
import { OrderReducer } from './ducks/orders/reducer';

// eslint-disable-next-line import/no-cycle
import { userReducer } from './ducks/user/reducer';
import { UsersReducer } from './ducks/users/reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  orders: OrderReducer,
  user: userReducer,
  users: UsersReducer,
});
