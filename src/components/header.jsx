import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="bg-secondary">
                  We are Nice Touch
                  <span></span>
                </h1>
                <p>
                  Nice Touch an Online Laundry Platform in Nairobi Kenya with
                  the latest technology in washing, dry cleaning and laundry.
                  Our services combine our expertise and experience acquired
                  over a period of time to provide you with clean laundry in the
                  shortest possible turnaround time.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
