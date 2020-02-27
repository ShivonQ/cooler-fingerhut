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
              src="/images/nike_shoes.png"
              alt="Nike"
            />
          </a>
        </div>
        <div className="col-md-3 p-0">
          <a href="/">
            <img
              className="brand-image-container"
              src="/images/Mens.png"
              alt="Apple"
            />
          </a>
        </div>
        <div className="col-md-3 p-0">
          <a href="/">
            <img
              className="brand-image-container"
              src="https://s7d4.scene7.com/is/image/roomandboard/hartley_948499_18e1_g?hei=725&$str_g$"
              alt="Second slide"
            />
          </a>
        </div>
        <div className="col-md-3 p-0 mb-2">
          <a href="/">
            <img
              className="brand-image-container"
              src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              alt="Third slide"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsWeLove;
