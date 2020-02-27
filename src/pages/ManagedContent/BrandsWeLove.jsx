import React from "react";
import "../Home/home.css";

const BrandsWeLove = () => {
  return (
    <div >
      <h2 className="text-center">Brands We Love</h2>
      <div className="row ml-1 mr-1 mb-4">
        <div className="col-md-3 p-0">
          <a href="/">
            <img
              className="brand-image-container"
              src="/images/nike_logo.png"
              alt="Nike"
            />
          </a>
        </div>
        <div className="col-md-3 p-0">
          <a href="/">
            <img
              className="brand-image-container"
              src="/images/sorel_logo.png"
              alt="Sorel"
            />
          </a>
        </div>
        <div className="col-md-3 p-0">
          <a href="/">
            <img
              className="brand-image-container"
              src="/images/apple_logo.png"
              alt="Apple"
            />
          </a>
        </div>
        <div className="col-md-3 p-0 mb-2">
          <a href="/">
            <img
              className="brand-image-container"
              src="/images/kitchenaid_logo.png"
              alt="Kitchen Aid"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsWeLove;
