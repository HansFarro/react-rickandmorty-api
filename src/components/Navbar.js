import React from 'react';

const Navbar = () => {
  return ( 
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
    <div className="container">
      <a className="navbar-brand" href="#!">Rick and Morty API</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">Home</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
   );
}
 
export default Navbar;