import React from 'react';
import Navigation from '../components/Navigation';
import Order from '../components/Order';

function SortOrders() {
  return (
    <div>
      <Navigation active={1} />
      <main className="sortOrders">
        <h2>Мои заказы:</h2>
        <Order
          _id="1"
          from="Urickogo 33 41"
          to="Moskow"
          phone="8 900 900 2020"
          date="28.02.2020"
          children={true}
          trunsk={false}
          add={true}
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
          add={true}
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
          add={true}
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
          add={true}
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
          add={true}
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
          add={true}
        />
      </main>
    </div>
  );
}

export default SortOrders;
