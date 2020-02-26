import React, { useEffect, useState } from 'react'
import logo from '../../logo.svg';
import api from '../../api/api'
import './PDP.css'

const PDP = ({ match }) => {

  const { params } = match
  const { productId } = params
  console.log('productId:', productId)
  const [product, setProduct] = useState({})

  const { name = "", category = "", image = "", price = 0, productDescription = "" } = product


  useEffect(() => {
    setProduct(api.getProduct(productId))
  }, [])

  console.log('product:', product)

  return (
  <div className="container">
    <div className="pdp-container">
      <div>
        <h1 className="pdp-header">{name}</h1>
      </div>
    <div className="pdp-image">
        <img src={image} alt="product image" />
    </div>
    <div className="pdp-details">
      <div>
        Name: {name}
      </div>
      <div>
        Category: {category}
      </div>
      <div>
        Price: {price}
      </div>
      <div>
        Description: {productDescription}
      </div>
    </div>
    </div>
  </div>
)

}

export default PDP

