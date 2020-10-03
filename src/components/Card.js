import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({ id, name, status, species, gender, image }) => {

  return (
  <div className="col">
    <Link target="__blank" to="/character">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title text-center text-primary">{name}</h5>
        <h6 className="card-text text-center">Status : {status}</h6>
        <h6 className="card-text text-center">Species: {species}</h6>
        <h6 className="card-text text-center">Gender: {gender}</h6>
      </div>
    </div>
    </Link>
  </div>
   );
}
 
export default Card;