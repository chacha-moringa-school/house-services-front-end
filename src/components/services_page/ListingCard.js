import React from "react";
import { useNavigate ,useParams } from "react-router-dom";
import { Services } from "../services";
import useFetch from "./useFetch";

function ListingCard({id, image, description, name, price}) {
  let navigate = useNavigate();

  const {data} = useFetch(`http://localhost:4000/services/${id}`)

  const handleDelete = () =>{
    fetch(`http://localhost:4000/services/${data.id}`, {
            method: 'DELETE'
    })
    .then(()=>{
      window.location.reload();
      navigate("/services");
    })
  }

  const FunEdit=(id)=>{
        navigate('/update/'+id)
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
                        <button className="btn btn-primary" onClick={()=>{FunEdit(id)}}>Update</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
  );
}

export default ListingCard;
