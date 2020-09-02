import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './containers/home/HomeContainer'
import AboutContainer from './containers/about/AboutContainer'
import ProjectContainer from './containers/projects/ProjectContainer'

function App() {
  return (
    <Router>
      <Route exact path="/home" component={HomeContainer}/>
      <Route exact path ="/about" component={AboutContainer} />
      <Route exact path="/projects" component={ProjectContainer} />
    </Router>
  );
}

export default App;
