import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Statistic from '../components/Statistic';
import { fetchOrders } from '../store/ducks/orders/actionCreators';
import { SelectOrderItems } from '../store/ducks/orders/selectors';
import { fetchUsers } from '../store/ducks/users/actionCreators';
import { SelectUserItems } from '../store/ducks/users/selectors';
function StatisticPage() {
  let summ = 0;
  const orders = useSelector(SelectOrderItems);
  const dispatch = useDispatch();
  const users = useSelector(SelectUserItems);
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  orders.map((ord) => {
    console.log(ord.price);
    summ = summ * 1 + ord.price * 1;
  });

  return (
    <div>
      <Navigation active={2} />
      <main className="statisticPage">
        <Statistic summa={summ} workers={users.length} orders={orders.length} />
      </main>
    </div>
  );
}

export default StatisticPage;
