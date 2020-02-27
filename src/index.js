import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import PDP from "./pages/PDP/PDP";
import PLP from "./pages/PLP/PLP";
import Cart from "./pages/Cart/Cart";
import CreditApplication from "./pages/CreditApplication/Credit Application";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import localStorageUtil from "./util/localStorageUtil";
import Search from './pages/Search/Search'

const App = () => {
  const [cart, setCart] = useState(localStorageUtil.get("cart") || []);

  const addToCart = item => {
    const localCart = localStorageUtil.get("cart") || [];

    console.log("item:", item);

    if (!localCart.filter(cartItem => cartItem.uuid === item.uuid).length)
      localStorageUtil.set("cart", [...cart, item]);
    if (!cart.filter(cartItem => cartItem.uuid === item.uuid).length)
      setCart([...cart, item]);
  };

  const removeFromCart = item => {
    localStorageUtil.set(
      "cart",
      cart.filter(cartItem => cartItem.uuid !== item.uuid)
    );
    setCart(cart.filter(cartItem => cartItem.uuid !== item.uuid));
  };

  return (
    <Router>
      <div>
        <Header cart={cart} />
        <Route path={"/"} exact component={Home} />
        <Route
          exact
          path={`/PDP/:productId`}
          render={props => (
            <PDP
              {...props}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          )}
        />
        <Route
          render={props => <PLP {...props} addToCart={addToCart} cart={cart} />}
          exact
          path={`/PLP/:categoryId`}
        />
        <Route
          exact
          path={`/cart`}
          render={props => (
            <Cart {...props} removeFromCart={removeFromCart} cart={cart} />
          )}
        />
        <Route exact path={"/creditApplication"} render={CreditApplication}/>
        <Route exact path={"/search"} render={Search}/>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
