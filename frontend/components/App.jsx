import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Discover from './main/discover';

const App = () => (
  <div>
    <Switch>
      <Route path='/' component={Discover}/>
    </Switch>
  </div>
);

export default App;