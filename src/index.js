import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import PDP from "./pages/PDP/PDP";
import PLP from "./pages/PLP/PLP";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import localStorageUtil from "./util/localStorageUtil";

const App = () => {
  const [cart, setCart] = useState(localStorageUtil.get("cart") || []);

  const addToCart = item => {
    const localCart = localStorageUtil.get("cart") || [];

    if (localCart.indexOf(item) < 0)
      localStorageUtil.set("cart", [...cart, item]);
    if (cart.indexOf(item) < 0) setCart([...cart, item]);
  };

  const removeFromCart = item => {
    localStorageUtil.set(
      "cart",
      cart.filter(cartItem => cartItem.id !== item.id)
    );
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
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
        <Route component={PLP} exact path={`/PLP/:categoryId`} />
        <Route
          exact
          path={`/cart`}
          render={props => (
            <Cart {...props} removeFromCart={removeFromCart} cart={cart} />
          )}
        />
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
