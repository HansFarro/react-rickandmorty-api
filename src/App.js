import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </>
  );
}

export default App;
