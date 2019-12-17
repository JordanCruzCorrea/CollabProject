import React from 'react';
import CardsContainer from './components/CardsContainer'
import NavContainer from './components/Nav'
import CarouselContainer from './components/CarouselContainer'

import './styles/css/App.css';
import './styles/scss/custom.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavContainer />
      <CarouselContainer />
      <CardsContainer/>
    </div>
  );
}

export default App;
