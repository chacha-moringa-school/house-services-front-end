import React from "react";
import { useNavigate ,useParams } from "react-router-dom";
import { Services } from "../services";
import useFetch from "./useFetch";

function ListingCard({id, image, description, name, price}) {

  const {data} = useFetch(`http://localhost:4000/services/${id}`)

  const handleDelete = () =>{
    fetch(`http://localhost:4000/services/${data.id}`, {
            method: 'DELETE'
    })
    .then((res)=>{
        return res.json()})
    .then((data)=>{console.log(data)})
  }

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
                        <a href="#" className="btn btn-primary">Update</a>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    
    // <li className="cardcard col-12 col-md-4 col-xl-3 col-xxl-2 text-start bg-dark text-white shadow m-3">
      // <div className="card" style="width: 18rem;">
      //   <img src={image} className="card-img-top" alt="..."/>
      //   <div className="card-body">
      //     <h5 className="card-title">{name}</h5>
      //     <p className="card-text">{description}</p>
      //     <h5 className="card-title">Ksh {price}</h5>
      //     <a href="#" className="btn btn-primary">Update</a>
      //   </div>
      // </div>
    // </li>
  );
}

export default ListingCard;
