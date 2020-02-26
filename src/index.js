import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import PDP from './pages/PDP'
import PLP from './pages/PLP'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import './App.css';


ReactDOM.render(<Router>
  <div>
    <Route path={'/'} exact component={Home}/>
    <Route component={PDP} exact  path={`/PDP/:productId`} />
    <Route component={PLP} exact path={`/PLP/:categoryId`} />
  </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
