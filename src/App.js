import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './containers/home/HomeContainer'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeContainer}/>
    </Router>
  );
}

export default App;
