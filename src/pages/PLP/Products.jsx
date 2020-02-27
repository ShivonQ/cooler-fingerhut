import React from 'react'
import {string} from 'prop-types'
import productsJson from '../../mock-data/products'
import './PLP.css'

const Products = ({ selectedCategory }) => {

  const products = productsJson ? productsJson.filter(product => product.category.includes(selectedCategory))
    : []

  const productsDisplay = products.map(product => {
    const { description, id, image, name, ppm, price } = product
    return (
      <div>
        <div className="row pt-2">
          <div className="col-sm-3">
            <a href={`/PDP/${id}`}><img className="img-fluid" src={image} alt={name}/></a>
          </div>
          <div className="col-sm-6">
            <h4><a href={`/PDP/${id}`}>{name}</a></h4>
            <p>{description}</p>
          </div>
          <div className="col-sm-3 text-right">
            <div className="pb-2">
              <h3 className="d-inline">{`$${ppm} `}</h3>
              <p className="d-inline">per month</p>
            </div>
            <h5>{`$${price}`}</h5>
          </div>
        </div>
        <hr/>
      </div>
    )
  })

  return (
    <div>
      {selectedCategory &&
      (
        <div className="row mb-5">
          <div className="col-sm-4">
            <hr/>
          </div>
          <div className="col-sm-4">
            <h3 className="text-center">Products</h3>
          </div>
          <div className="col-sm-4">
            <hr/>
          </div>
        </div>
      )}
      {productsDisplay}
    </div>
  )

}

Products.propTypes = {
  selectedCategory: string.isRequired,
}

export default Products

