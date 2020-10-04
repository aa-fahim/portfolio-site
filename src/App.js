import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
