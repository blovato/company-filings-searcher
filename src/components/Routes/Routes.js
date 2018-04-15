import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Search from '../Search';
import Company from '../Company';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Search} />
      <Route path="/:ticker" component={Company} />
    </div>
  </Router>
);
