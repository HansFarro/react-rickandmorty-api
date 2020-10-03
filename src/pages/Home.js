import React,{ Fragment }from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Home = ({characters}) => {
  return (
  <Fragment>
    <Navbar />
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-4">
        {characters.map((character) => (
          <Card key={character.id} id={character.id} name={character.name} status={character.status} species={character.species} gender={character.gender} image={character.image} url={character.url}/>
        ))}
      </div>
    </div>
  </Fragment>
  );
}
 
export default Home;