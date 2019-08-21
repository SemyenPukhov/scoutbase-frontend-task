import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Country from './components/Country';
import Countries from './components/Countries';

function Routes() {
  return (
    <Router>
      <Route path='/countries' exact component={Countries} />
      <Route path='/countries/:code' component={Country} />
      <Route path='/' exact component={Home} />
    </Router>
  );
}

export default Routes;
