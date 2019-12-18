import React from 'react';
import Container from 'react-bootstrap/Container'
import Home from './components/Home'
import NavContainer from './components/Nav'

import './styles/css/App.css';
import './styles/scss/custom.scss'

function App() {
  return (
    <Container fluid className="p-0">
      <NavContainer />
      <Home />
    </Container>
  );
}

export default App;
