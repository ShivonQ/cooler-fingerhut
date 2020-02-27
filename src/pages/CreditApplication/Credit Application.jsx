import React from "react";
import "./CreditApplication.css";

const CreditApplication = () => {
  return (
    <div className="m-5">
      <h1>Apply for Your Fingerhut Credit Account</h1>
      <h5 className="text-muted">issued by WebBank, Member FDIC</h5>
      <form>
        <p>* indicates a required field.</p>
        <h5>Tell us about yourself</h5>
        <label className="col-sm-12">First Name:</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Middle Name:</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Last Name:</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Suffix:</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Address Line 1</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Address Line 2</label>
        <input className="col-sm-8"></input>
        <input type="checkbox"></input>
        <label>This is a P.O. Box</label>
        <label className="col-sm-12">City</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">State</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Zip Code</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Primary Phone</label>
        <input className="col-sm-8"></input>
        <label className="col-sm-12">Secondary Phone</label>
        <input className="col-sm-8"></input>
        <p>
          <strong>Consent to Use of Telephone Numbers:</strong> You authorize
          WebBank, Fingerhut, their affiliates, agents, and others calling at
          their request or on their behalf to contact you at any number (i) you
          have provided to us (ii) from which you have called us, or (iii) which
          we obtain and believe we can reach you at. We may contact you in any
          way, such as calling, texting, using an automated dialer or using
          pre-recorded messages. We may contact you on a mobile, wireless, or
          similar device, even if you are charged for it by your provider.
          Informational Text Message Disclosures: Fingerhut Account Alerts.
          Message and data rates may apply. Up to 8 msgs/mo from 40537. Reply
          STOP to 40537 to cancel. Reply HELP to 40537 for help. Call
          1-800-208-2500 for support. More Information: See our{" "}
          <a className="text-info" href="/">
            Privacy>
          </a>{" "}
          Policy and{" "}
          <a className="text-info" href="/">
            SMS Terms and Conditions.
          </a>
        </p>
      </form>
    </div>
  );
};

export default CreditApplication;
