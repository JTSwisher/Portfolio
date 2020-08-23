import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './containers/home/HomeContainer'
import AboutContainer from './containers/about/AboutContainer'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeContainer}/>
      <Route exact path ="/about" component={AboutContainer} />
    </Router>
  );
}

export default App;
