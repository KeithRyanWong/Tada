import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Discover from './main/discover_container';
import Portfolio from './main/portfolio_container';
import Header from './main/header_container';

const App = () => (
  <div>
    <Switch>
      <Route path='/' component={Header}/>
    </Switch>
    <Switch>
      <Route path='/user/:id' component={Portfolio}/> 
      <Route path='/' component={Discover}/>
    </Switch>
  </div>
);

export default App;