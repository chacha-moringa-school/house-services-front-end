import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/services/${id}`)
      .then((response) => response.json())
      .then((service) => setService(service));
    setLoading(false);
    console.log(service.image_url);
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowService = () => {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Service Id - {service.id}</h2>
            <div className="col-md-6">
              <img
                src={service.image_url}
                alt={service.name}
                height="700px"
                width="550px"
              />
            </div>
            <div className="col-md-6 text-white">
              <h4 className="text-uppercase text-white-50">{service.id}</h4>
              <h1 className="display-5">{service.name}</h1>

              <h3 className="display-6 my-4 fw-bold">${service.price}</h3>
              <p className="lead">{service.description}</p>
              <a href="/admin" className="btn btn-success">
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowService />}</div>
      </div>
    </div>
  );
};

export default Service;
