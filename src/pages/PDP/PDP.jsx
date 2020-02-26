import React, { useEffect, useState } from 'react'
import { string, object, func, arrayOf } from 'prop-types'
import logo from '../../logo.svg';
import api from '../../api/api'
import './PDP.css'

const PDP = ({ match, cart, addToCart, removeFromCart }) => {

  const { params } = match
  const { productId } = params
  const [product, setProduct] = useState({})
  const [productInCart, setProductInCart] = useState(false)

  const { name = "", category = "", image = "", price = 0, productDescription = "" } = product

  useEffect(() => {
    const fetchedProduct = api.getProduct(productId)
    setProduct(fetchedProduct)
  }, [])

  useEffect(() => {
    setProductInCart((cart.filter(item => item === product.id).length > 0))
  }, [cart])


  return (
  <div className="container">
    <div className="pdp-container">
      <div className="pdp-header">
        <h1>{name}</h1>
      </div>
    <div className="pdp-image">
        <img src={image} alt="product image" />
    </div>
    <div className="pdp-details primary">
      <table className="pdp-table">
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Category</th>
          <td>{category}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>{price}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{productDescription}</td>
        </tr>
      </table>
    </div>
    <div className="pdp-add-to-cart mt-3">
      <button disabled={productInCart} onClick={() => addToCart(product.id)} className="btn btn-primary float-right">{productInCart ? 'Product in Cart' : 'Add to Cart'}</button>
    </div>
    </div>
  </div>
)

}

PDP.propTypes = {
  addToCart: func.isRequired,
  cart: arrayOf(string),
  match: object.isRequired,
  removeFromCart: func.isRequired,
}

PDP.defaultProps = {
  cart: [],
}

export default PDP

