import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/api';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Ta-da!</h1>, root);
});

window.APIUtil = APIUtil;