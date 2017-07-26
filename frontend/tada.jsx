import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';


// import * as asd from './actions/users_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  let store;
  if (window.currentUser) {
    const preloadedState = { 
      currentUser: { 
        id: window.currentUser.id, 
        image_url: window.currentUser.image_url 
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});

// window.asd = asd;