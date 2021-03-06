import React, { useEffect, useState } from 'react'
import { object, func, arrayOf } from 'prop-types'
import api from '../../api/api'
import './PDP.css'

const loopTo15 = () => {
  const numberArray = []
  for (let x = 1; x < 16; x++) {
    numberArray.push(x)
  }
  return numberArray
}

const PDP = ({ match, cart, addToCart }) => {

  const { params } = match
  const { productId } = params
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  const [maxQuantity] = useState(loopTo15())

  const [selectedSize, setSelectedSize] = useState('small')
  const { name = "", ppm = 0, image = "", price = 0, description = "", size = [] } = product

  const createCartProduct = () => {
    const productForCart = {}
    productForCart.id = product.id
    productForCart.image = image
    productForCart.name = name
    productForCart.ppm = ppm
    productForCart.price = price
    productForCart.category = product.category
    productForCart.quantity = quantity
    productForCart.selectedSize = selectedSize;
    productForCart.uuid = productForCart.id + productForCart.selectedSize
    return productForCart
  }

  useEffect(() => {
    const fetchedProduct = api.getProduct(productId)
    console.log('fetchedProduct:', fetchedProduct)
    setProduct(fetchedProduct)
  }, [])

  const selectSize = (size) => {
    console.log('size:', size)
    setSelectedSize(size)
  }


  return (
  <div className="container">
    <div className="pdp-container">
      <div className="pdp-header">
        <h1>{name}</h1>
      </div>
    <div className="pdp-image">
        <img src={image} alt="product" className="image-responsive" />
    </div>
    <div className="pdp-details primary">
      <table className="pdp-table">
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{description}</td>
        </tr>
      </table>
      <div className="pdp-size">
        <th>SIZE {size.length ? size.map(itemSize => <button onClick={() => selectSize(itemSize)} className={`${selectedSize === itemSize ? 'selected-size' : ''} text-center`}>{itemSize[0].toUpperCase()}</button>) : ''}</th>
      </div>
      <div className="pdp-quantity">
        <th>Quantity &nbsp;
        <select defaultValue={1} onChange={(event) => setQuantity(event.target.value)}>
          {maxQuantity.map(number => <option value={number}>{number}</option>)}
        </select>
        </th>
      </div>
      <div className="pdp-price">
        <div class="pb-2"><h3 class="d-inline">${ppm}</h3><p class="d-inline">per month</p></div>
        <h5>${price}</h5>
      </div>
    </div>
    <div className="pdp-add-to-cart mt-3">
      <button onClick={() => addToCart(createCartProduct())} className="btn btn-primary">Add to Cart</button>
    </div>
    </div>
  </div>
)

}

PDP.propTypes = {
  addToCart: func.isRequired,
  cart: arrayOf(object),
  match: object.isRequired,
}

PDP.defaultProps = {
  cart: [],
}

export default PDP

