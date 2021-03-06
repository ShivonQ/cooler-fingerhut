import React from "react";
import { arrayOf, object, func } from "prop-types";
import "./Cart.css";
const Cart = ({ cart, removeFromCart }) => {
  console.log('cart:', cart)
  return (
    <div className="container">
      <div className="cart-header text-center">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-container">
        {!cart.length && (
          <div className="product-row text-center">Your cart is empty</div>
        )}
        {cart.length ? (
          <div className="cart-details">
            <table className="cart-table">
              <thead className="text-center">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th />
                </tr>
              </thead>
              <tbody className="text-center">
                {cart.map((item, index) => (
                  <tr key={index} className="product-row">
                    <td className="cart-image">
                      <img
                        className="product-image"
                        alt="large product"
                        src={item.image}
                      />
                    </td>
                    <td>
                      <a href={`/PDP/${item.id}`}>{item.name}</a>
                    </td>
                    <td>{item.selectedSize}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td className="remove-from-cart mt-3 col-xs-2">
                      <button
                        onClick={() => removeFromCart(item)}
                        className="btn btn-primary"
                      >
                        Remove from Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: arrayOf(object),
  removeFromCart: func.isRequired
};

export default Cart;
