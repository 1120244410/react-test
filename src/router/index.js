import React from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Main from '@/pages/main';
import Flow from '@/pages/flow';

const BasicRoute = () => (
  <HashRouter history={hashHistory}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/flow" component={Flow} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
