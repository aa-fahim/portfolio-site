import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume';
import ChargingStaton from './components/posts/ChargingStation/ChargingStation';
import ImageFilters from './components/posts/ImageFilters/ImageFilters';

import TestComponent from './components/pages/TestComponent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
          <Route path='/posts/1' component={ChargingStaton} />
          <Route path='/posts/2' component={ImageFilters} />
          <Route path='/test' component={TestComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
