import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Welcome from './components/welcome.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
        <Route path="/welcome" component={Welcome} />
    </Route>
  </Router>
);

export default Routes;