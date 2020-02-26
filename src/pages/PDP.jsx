import React, { useEffect, useState } from 'react'
import logo from '../logo.svg';
import api from '../api/api'

const PDP = ({ match }) => {

  const { params } = match
  const { productId } = params
  console.log('productId:', productId)
  const [product, setProduct] = useState(null)


  useEffect(() => {
    setProduct(api.getProduct(productId))
  }, [])

  console.log('product:', product)

  return (
  <div className="App">
    <h1>PDP</h1>
    <div>
      {JSON.stringify(product)}
    </div>
  </div>
)

}

export default PDP

