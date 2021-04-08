import React from 'react';
import Navigation from '../components/Navigation';
import Statistic from '../components/Statistic';

function MyGraph() {
  return (
    <div>
      <Navigation active={2} />
      <main className="statisticPage">
        <Statistic summa={3000} orders={322} />
      </main>
    </div>
  );
}

export default MyGraph;
