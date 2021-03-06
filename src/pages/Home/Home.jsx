import React from "react";
import "./home.css";
import CreditContent from '../ManagedContent/CreditContent'
import BrandsWeLove from "../ManagedContent/BrandsWeLove";

const Home = () => {
  return (
    <div className="App container-fluid">
      <div className="text-center mt-4 mb-4 d-none d-md-none d-lg-block">
        <h2 className="d-inline mr-5">
          <a href="/PLP/1">SALE</a>
        </h2>
        <h2 className="d-inline mr-5">
          <a href="/PLP/2">WOMEN</a>
        </h2>
        <h2 className="d-inline mr-5">
          <a href="/PLP/3">MEN</a>
        </h2>
        <h2 className="d-inline mr-5">
          <a href="/PLP/4">HOME</a>
        </h2>
        <h2 className="d-inline">
          <a href="/PLP/5">ELECTRONICS</a>
        </h2>
      </div>
      <div className="row mb-4">
        <div className="col-md-3 p-0">
          <a href="/PLP/2">
            <div className="overflow-hidden">
            <img
              className="image-container"
              src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_01_T49_1863_Y0_X_EC_1?$PDP_INT_IMAGEGRID_1_LG$"
              alt="Womens"
            />
            </div>
          </a>
        </div>
        <div className="col-md-3 p-0">
          <a href="/PLP/3">
            <div className="overflow-hidden">
            <img
              className="image-container"
              src="/images/Mens.png"
              alt="Mens"
            />
            </div>
          </a>
        </div>
        <div className="col-md-3 p-0">
          <a href="/PLP/4">
            <div className="overflow-hidden">
            <img
              className="image-container"
              src="https://s7d4.scene7.com/is/image/roomandboard/hartley_948499_18e1_g?hei=725&$str_g$"
              alt="Second slide"
            />
            </div>
          </a>
        </div>
        <div className="col-md-3 p-0 mb-2">
          <a href="/PLP/5">
            <div className="overflow-hidden">
            <img
              className="image-container"
              src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              alt="Third slide"
            />
            </div>
          </a>
        </div>
      </div>
      <CreditContent />
      <BrandsWeLove />
    </div>
  );
};

export default Home;
