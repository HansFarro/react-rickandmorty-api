import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
// Cargar Paginas
import Home from './pages/Home'
import Character from './pages/Character';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const consultarAPI = async() => {
      const result = await axios('https://rickandmortyapi.com/api/character');
      setCharacters(result.data.results);
    }
    consultarAPI();
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home characters={characters}/>}></Route>
        <Route exact path="/character" component={() => <Character />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
