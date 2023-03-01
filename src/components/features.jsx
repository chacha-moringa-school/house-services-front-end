import React from "react";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Why Choose Us</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-truck"></i>
            <h3>Free Pickup & Delivery</h3>
            <p>
              Doorstep Pickup and Your clothes will be delivered at your
              doorstep on time and as fresh as daisy.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-plus"></i>
            <h3>Hygienic</h3>
            <p>
              Your clothes are hygienically washed so they are free from germs
              and clean. Just the way you think about laundry!.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-usd"></i>
            <h3>Affordable</h3>
            <p>
              No Additional Cost! You pay just same as the price set by your
              selected laundry vendor.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-leaf"></i>
            <h3>Eco Friendly</h3>
            <p>
              Local residents love on our reliable laundry & dry cleaning
              services for the fast, accurate, top quality results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
