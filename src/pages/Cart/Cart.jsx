import React from 'react'
import './Cart.css'
const Cart = ({ cart }) => {

  if (!cart.length) {
    return (
      <div className="container">
        <div className="cart-container">
          <div>Your cart is empty</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Your Cart</h1>
        </div>
          {!cart.length && <div>Your cart is empty</div>}
          {cart.map((item, index) => (
            <div key={index} className="product-row">
              <img className="product-image" src={item.image} />
              {item.id}
            </div>
            )
          )}
      </div>
    </div>
)

}

export default Cart

