import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-laundry-room-organization-ideas-1547675955.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Nice Touch is an Online Laundry Platform in Nairobi Kenya with the
                latest technology in washing, dry cleaning and laundry. Our
                services combine our expertise and experience acquired over a
                period of time to provide you with clean laundry in the shortest
                possible turnaround time. It has partnered up with the top
                laundry experts of the country and provides you with a free
                Pick-up and Delivery for your dirty laundry. With our Website,
                Mobile App or Hotline Number, you can just schedule an order and
                we will take it from there!
              </p>
              <h3>How it Works</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Select Service</li>
                    <li>Reach Out</li>
                    <li>Set Schedule</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Pick up/Drop</li>
                    <li>Wash & Iron</li>
                    <li>Deliver</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
