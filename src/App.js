import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Home/Resume';
import ChargingStaton from './projects/ChargingStation/ChargingStation';
import ProductScanner from './projects/ProductScanner/ProductScanner';
import ImageFilters from './projects/ImageFilters/ImageFilters';
import BankingSystem from './projects/BankingSystem/BankingSystem';
import SportsQuizApp from './projects/SportsQuizApp/SportsQuizApp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import TestComponent from './pages/TestComponent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
          <Route path='/project/1' component={ChargingStaton} />
          <Route path='/project/2' component={ProductScanner} />
          <Route path='/project/3' component={ImageFilters} />
          <Route path='/project/4' component={BankingSystem} />
          <Route path='/project/5' component={SportsQuizApp} />
          <Route path='/test' component={TestComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
