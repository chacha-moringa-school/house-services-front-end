import React from "react";

function ListingCard({id, image, description, name, price}) {

  const str = description;

  const result = str.substring(0, 15);

  const title = name;

  const titleResult = name.substring(0, 15);

  return (
    <div id="row" className="services-card d-flex justify-content-between">
      <div key={id} className="col-md-3 col-sm-6 team">
        <div className="thumbnail">
          {" "}
          <img src={image} alt="..." className="team-img" />
          <div className="caption">
            <h3>{titleResult}...</h3>
            <p id="desc">{result}...</p>
            <h4>Ksh {price}</h4>
            <div className="d-flex justify-content-between">
              <a href="#contact" className="btn btn-primary">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
