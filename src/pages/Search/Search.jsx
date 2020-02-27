import React from "react";
import { string } from "prop-types";
import productsJson from "../../mock-data/products";


const Search = ({ selectedCategory, productInCart, addToCart, cart }) => {

  const productsDisplay = productsJson ? productsJson.map(product => {
    const { description, id, image, name, ppm, price } = product;
    return (
      <div>
        <div className="row pt-2">
          <div className="col-sm-3">
            <a href={`/PDP/${id}`}>
              <img className="img-fluid" src={image} alt={name} />
            </a>
          </div>
          <div className="col-sm-6">
            <h4>
              <a href={`/PDP/${id}`}>{name}</a>
            </h4>
            <p>{description}</p>
          </div>
          <div className="col-sm-3 text-right">
            <div className="pb-2">
              <h3 className="d-inline">{`$${ppm} `}</h3>
              <p className="d-inline">per month</p>
            </div>
            <h5>{`$${price}`}</h5>
            <div className="pdp-add-to-cart mt-3">
              <button
                disabled={productInCart}
                onClick={() => addToCart(product)}
                className="btn btn-primary"
              >
                {productInCart ? "Product in Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }) : []

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-5">Search Results</h2>
      {productsDisplay}
    </div>
  );
};

Search.propTypes = {
  selectedCategory: string.isRequired
};

export default Search;
