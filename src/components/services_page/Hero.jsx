import React from "react";
import useFetch from "./useFetch";
import ListingCard from "./ListingCard";


function Hero() {
    const { data } = useFetch("http://localhost:4000/services");

    const listLoop = data.map((listing) => {
      return (
        <ListingCard
          key={listing.id}
          id={listing.id}
          description={listing.description}
          image={listing.image_url}
          name={listing.name}
          price={listing.price}
        />
      );
    });
    
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            The aim of Nice Touch is to provide outstanding bulk laundry services to schools,
            Hotels, ball game teams , hospitals and households locally within Nairobi.
          </p>
        </div>
        <ul className="cards">{listLoop}</ul>
      </div>
    </div>
  );
}

export default Hero;
