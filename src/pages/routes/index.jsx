import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Settings from '../Settings';
import Feedback from '../Feedback';

import Login from '../Login';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/feedback" component={ Feedback } />
      </Switch>
    </BrowserRouter>
  );
}
