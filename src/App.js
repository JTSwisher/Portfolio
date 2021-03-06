import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './home/HomeContainer'
import AboutContainer from './about/AboutContainer'
import ProjectContainer from './projects/ProjectContainer'

function App() {
  return (
    <>
    <HomeContainer />
    <AboutContainer />
    <ProjectContainer />
    </>
    // <Router>
    //   <Route exact path="/" component={HomeContainer}/>
    //   <Route exact path="/home" component={HomeContainer}/>
    //   <Route exact path ="/about" component={AboutContainer} />
    //   <Route exact path="/projects" component={ProjectContainer} />
    // </Router>
  );
}

export default App;
