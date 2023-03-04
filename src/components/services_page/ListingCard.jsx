import React from "react";
import { useNavigate ,useParams } from "react-router-dom";
import { Services } from "../services";
import useFetch from "./useFetch";

function ListingCard({id, image, description, name, price}) {
  let navigate = useNavigate();

  const {data} = useFetch(`http://localhost:4000/services/${id}`)

  return (
     <div id="row" className="services-card">
                <div key={id} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={image} alt="..." className="team-img" />
                    <div className="caption">
                      <h3>{name}</h3>
                      <p id = "desc">{description}</p>
                      <h4>Ksh {price}</h4>
                      <div className="d-flex justify-content-between">
                        <a href="#contact" className="btn btn-primary">Get Quote</a> 
                      </div>
                    </div>
                  </div>
                </div>
        </div>
  );
}

export default ListingCard;
