import React from "react";
import "../Home/home.css";

const BrandsWeLove = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center brands-we-love">Brands We Love</h2>
      <div className="row ml-1 mr-1">
        <div className="col-md-3 p-0">
          <a href="/">
            <img
              className="brand-image-container"
              src="/images/puma_logo.png"
              alt="Puma"
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
