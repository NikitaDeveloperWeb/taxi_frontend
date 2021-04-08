import React from 'react';
import Modal from '../components/Modal';
import Navigation from '../components/Navigation';
import Order from '../components/Order';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import OrderAdd from '../components/OrderAdd';
function HomeWorker() {
  return (
    <div className="wrapper">
      <Navigation active={0} />

      <main className="main">
        <div className="main__aside">
          <h2>
            Выбирите
            <br /> действие
          </h2>

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
            <Order
              _id="1"
              from="Urickogo 33 41"
              to="Moskow"
              phone="8 900 900 2020"
              date="28.02.2020"
              children={true}
              trunsk={false}
              price={150}
            />
            <Order
              _id="1"
              from="Urickogo 33 41"
              to="Moskow"
              phone="8 900 900 2020"
              date="28.02.2020"
              children={true}
              trunsk={false}
              price={150}
            />
            <Order
              _id="1"
              from="Urickogo 33 41"
              to="Moskow"
              phone="8 900 900 2020"
              date="28.02.2020"
              children={true}
              trunsk={false}
              price={150}
            />
            <Order
              _id="1"
              from="Urickogo 33 41"
              to="Moskow"
              phone="8 900 900 2020"
              date="28.02.2020"
              children={true}
              trunsk={false}
              price={150}
            />
            <Order
              _id="1"
              from="Urickogo 33 41"
              to="Moskow"
              phone="8 900 900 2020"
              date="28.02.2020"
              children={true}
              trunsk={false}
              price={150}
            />
            <Order
              _id="1"
              from="Urickogo 33 41"
              to="Moskow"
              phone="8 900 900 2020"
              date="28.02.2020"
              children={true}
              trunsk={false}
              price={150}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeWorker;
