import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import menus from './menus';

export default function RouteController() {
  return (
    <Router>
      <Switch>
        {menus.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.children} />}
    />
  );
}
