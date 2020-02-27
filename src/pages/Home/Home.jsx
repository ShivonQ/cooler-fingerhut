import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="App">
      <div className="text-center mt-2 mb-2 d-none d-md-none d-lg-block">
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
        <h2 className="d-inline mr-5">
          <a href="/PLP/5">ELECTRONICS</a>
        </h2>
      </div>
      <div className="row ml-1 mr-1 mb-4">
        <div class="col-md-3 p-0">
        <a href="/PLP/2"><img
            class="image-container"
            src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_01_T49_1863_Y0_X_EC_1?$PDP_INT_IMAGEGRID_1_LG$"
            alt="Womens"
          /></a>
        </div>
        <div class="col-md-3 p-0">
        <a href="/PLP/3"><img class="image-container" src="/images/Mens.png" alt="Mens" /></a>
        </div>
        <div class="col-md-3 p-0">
        <a href="/PLP/4"><img
            class="image-container"
            src="https://s7d4.scene7.com/is/image/roomandboard/hartley_948499_18e1_g?hei=725&$str_g$"
            alt="Second slide"
          /></a>
        </div>
        <div class="col-md-3 p-0 mb-2">
        <a href="/PLP/5"><img
            class="image-container"
            src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
            alt="Third slide"
          /></a>
        </div>
      </div>
      <div className="credit-container row">
        <div className="col-md-4">
          <h4>Apply Today, Buy Today</h4>
          <div>
            <img
              className="d-inline pr-1"
              width="20"
              src="images/checkmark.png"
              alt="credit"
            />
            <h5 className="d-inline">Build your credit with us</h5>
          </div>
          <div>
            <img
              className="d-inline pr-1"
              width="20"
              src="images/checkmark.png"
              alt="credit"
            />
            <h5 className="d-inline">Low monthly payments</h5>
          </div>
          <div>
            <img
              className="d-inline pr-1"
              width="20"
              src="images/checkmark.png"
              alt="credit"
            />
            <h5 className="d-inline">Trusted brand names</h5>
          </div>
        </div>
        <div className="col-md-2">
          <img
            className="d-inline"
            height="200px"
            src="https://www.fingerhut.com/assets/f/test/card-img-visa-both.png"
            alt="fingerhut card"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
