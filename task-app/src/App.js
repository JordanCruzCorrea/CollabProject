import React from 'react';
import Home from './components/Home'
import NavContainer from './components/Nav'

import './styles/css/App.css';
import './styles/scss/custom.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavContainer />
      <Home />
    </div>
  );
}

export default App;
