import React from 'react';

const Card = () => {
  return (
  <div class="col">
    <a href="#!">
    <div class="card h-100">
      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center text-primary">Nombre: Rick Sanchez</h5>
        <h6 className="card-text text-center">Status : Alive</h6>
        <h6 className="card-text text-center">Species: Human</h6>
        <h6 className="card-text text-center">Gender: Male</h6>
      </div>
    </div>
    </a>
  </div>
   );
}
 
export default Card;