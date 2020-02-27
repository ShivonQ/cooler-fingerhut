import React from "react";
import "../Home/home.css";

const CreditContent = () => {
  return (
    <div className="credit-container row">
      <div className="col-md-2 col-sm-4">
        <img
          className="d-inline"
          height="200px"
          src="https://www.fingerhut.com/assets/f/test/card-prototype.png"
          alt="fingerhut card"
        />
      </div>
      <div className="col-md-4 mt-4">
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
          <a href="/creditApplication">
            <h5 className="pt-2 pl-4 text-info">Apply Now</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreditContent;
