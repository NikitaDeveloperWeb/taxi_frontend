import React from 'react';

interface StatisticProps {
  summa: number;
  orders: number;
  workers?: number;
}

function Statistic({ summa, orders, workers }: StatisticProps) {
  return (
    <div className="statistic">
      <h1>Статистика</h1>
      <div className="statistic__data">
        {workers && (
          <h2 className="statistic__data__workers">Рабочих: {workers}</h2>
        )}
        <h2 className="statistic__data__orders">Выполнено заказов: {orders}</h2>
        <h2 className="statistic__data__summa">Выручка: {summa} р.</h2>
      </div>
    </div>
  );
}

export default Statistic;
