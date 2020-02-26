import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import PDP from './pages/PDP/PDP'
import PLP from './pages/PLP'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  const [cart, setCart] = useState([])

  return (
    <Router>
  <div>
    <Header />
    <Route path={'/'} exact component={Home}/>
    <Route component={PDP} exact  path={`/PDP/:productId`} />
    <Route component={PLP} exact path={`/PLP/:categoryId`} />
    <Footer/>
  </div>
  </Router>
  )


}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
