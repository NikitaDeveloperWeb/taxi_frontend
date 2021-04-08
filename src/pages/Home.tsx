import React from 'react';
import Modal from '../components/Modal';
import Navigation from '../components/Navigation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import OrderAdd from '../components/OrderAdd';
import { useDispatch, useSelector } from 'react-redux';
import Order from '../components/Order';
import { SelectOrderItems } from '../store/ducks/orders/selectors';
import { fetchOrders } from '../store/ducks/orders/actionCreators';
function Home() {
  const dispatch = useDispatch();
  const orders = useSelector(SelectOrderItems);

  React.useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Navigation active={0} />

      <main className="main">
        <div className="main__aside">
          <h2>
            Выбирите
            <br /> действие
          </h2>
          <aside>
            <Modal
              children={<OrderAdd />}
              valueButton="Добавить"
              typeButton="button"
              classNameButton="button__primary"
            />
          </aside>
          <div className="main__logout">
            <ExitToAppIcon
              onClick={() => {
                window.localStorage.clear();
                window.location.reload();
              }}
            />
          </div>
        </div>
        <div className="main__content">
          <h2>Список заказов:</h2>
          <div className="main__content__list">
            {orders?.map((order) => (
              <span key={order._id}>
                <Order
                  _id={order._id}
                  from={order.from}
                  to={order.to}
                  phone={order.phone}
                  date={order.date + ' ' + order.time}
                  children={order.child}
                  trunsk={order.bagage}
                  price={order.price}
                />
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
