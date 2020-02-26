import React from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PDP from './pages/PDP'
import PLP from './pages/PLP/PLP'
import './App.css';

function App({ match }) {
  console.log('match:', match)
  return (
    <div>
      <Route component={Home} exact path={`${match.path}`} />
      <Route component={PDP} exact path={`${match.path}/PDP/:productId`} />
      <Route component={PLP} exact path={`${match.path}/PLP/:categoryId`} />
    </div>
);
}

export default App;
