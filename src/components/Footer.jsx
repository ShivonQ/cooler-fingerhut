import React from 'react'

const Footer = () => {

  return (
    <footer className="bg-dark pt-5 pb-5">
      <div className="container text-light">
        <div className="row">
          <div className="col-sm-4 col-md-3">
            <h4>
              <strong className="text-light">About Fingerhut</strong>
            </h4>

              <ul className="list-unstyled">
                <li><a className="text-light" href="#">About Us</a></li>
                <li><a className="text-light" href="#">Careers</a></li>
                <li><a className="text-light" href="#">Privacy &amp; Security</a></li>
                <li><a className="text-light" href="#">Do Not Sell My Info</a></li>
                <li><a className="text-light" href="#">Fingerhut Privacy Policy</a></li>
                <li><a className="text-light" href="#">Terms of Use</a></li>
                <li><a className="text-light" href="#">Fingerhut SweepsZone</a></li>
                <li><a className="text-light" href="#">Sweepstakes Rules</a></li>
                <li><a className="text-light" href="#">California Transparency in Supply Chains Act</a></li>
              </ul>

          </div>

          <div className="col-sm-4 col-md-3">
            <h4>
              <strong className="text-light">Customer Service</strong>
            </h4>

              <ul className="list-unstyled">
                <li><a className="text-light" href="#">Contact Us</a></li>
                <li><a className="text-light" href="#">FAQs</a></li>
                <li><a className="text-light" href="#">Manufacturer Contact <br /> Information</a></li>
                <li><a className="text-light" href="#">Product Guides</a></li>
                <li><a className="text-light" href="#">Product Recall</a></li>
                <li><a className="text-light" href="#">Returns</a></li>
                <li><a className="text-light" href="#">Request A Catalog</a></li>
                <li><a className="text-light" href="#">View All Products</a></li>
              </ul>

          </div>

          <div className="col-sm-4 col-md-3">
            <h4>
              <strong className="text-light">Payment Options</strong>
            </h4>

              <ul className="list-unstyled">
                <li><a className="text-light" href="#">Apply for Credit</a></li>
                <li><a className="text-light" href="#">Credit Education</a></li>
                <li><a className="text-light" href="#">Fingerhut Advantage Terms and Conditions</a></li>
                <li><a className="text-light" href="#">My Account</a></li>
                <li><a className="text-light" href="http://ats.eccmp.com/ats/show.aspx?cr=571&amp;fm=21" title="Download the Mobile App!"
                   data-track-id="globalFooter_link" data-track-value="Download Mobile App">
                  <img alt="" src="https://www.fingerhut.com/assets/f/app_icon_footer.png" />
                    <br />
                      Download the Mobile App
                </a></li>
              </ul>

          </div>

          <div className="col-sm-6 col-md-3">

            <h4 className="text-light">Catalog Search</h4>
          </div>
        </div>
      </div>
    </footer>)

}

export default Footer

