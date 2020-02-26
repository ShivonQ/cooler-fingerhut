import React from 'react'
import './Cart.css'
const Cart = ({ cart }) => {

  return (
  <div className="cart-container">
    {cart.map((item, index) => (
      <div key={index}>
        {JSON.stringify(item)}
      </div>
      )
    )}
    <div>

    </div>
  </div>
)

}

export default Cart

