import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../Login';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}
