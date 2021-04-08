import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import HomeWorker from './pages/HomeWorker';
import Login from './pages/Login';
import MyGraph from './pages/MyGraph';
import SortOrders from './pages/SortOrders';
import StatisticPage from './pages/StatisticPage';
import Workers from './pages/Workers';
import { AuthApi } from './services/api/authApi';
// import { SelectOrderItems } from './store/ducks/orders/selectors';
import { setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth } from './store/ducks/user/selectors';

export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);

  // const orders = useSelector(SelectOrderItems);

  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      history.replace('/home');
    } catch (error) {}
  };
  React.useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (isAuth) {
      history.push('/home');
    }
  }, [history, isAuth]);
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={isAuth ? Home : Login} />
        <Route
          path="/homeworkers"
          exact
          component={isAuth ? HomeWorker : Login}
        />
        <Route path="/workers" exact component={isAuth ? Workers : Login} />
        <Route path="/graph" exact component={isAuth ? StatisticPage : Login} />
        <Route path="/myorders" exact component={isAuth ? SortOrders : Login} />
        <Route path="/mystatistic" exact component={isAuth ? MyGraph : Login} />
      </Switch>
    </div>
  );
}
