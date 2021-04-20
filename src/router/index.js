import React from 'react';
import { Switch, Route } from 'react-router-dom';
import menus from './menus';

export default function RouteController() {
  return (
    <Switch>
      {menus.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
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
