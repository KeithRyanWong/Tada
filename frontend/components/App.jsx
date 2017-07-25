import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Discover from './main/discover_container';
import Portfolio from './main/portfolio_container';

const App = () => (
  <div>
    <Switch>
      <Route path='/user/:id' component={Portfolio}/> 
      <Route path='/' component={Discover}/>
    </Switch>
  </div>
);

export default App;