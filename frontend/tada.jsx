import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import * as ksjd from './util/projects_api';
import * as asd from './util/items_api';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  let store;
  if (window.currentUser) {
    const preloadedState = { 
      currentUser: { id: window.currentUser.id }
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

window.fetchProject = ksjd.fetchProject;
window.fetchProjects = ksjd.fetchProjects;
window.fetchUserProjects = ksjd.fetchUserProjects;
window.submitProject = ksjd.submitProject;
window.updateProject = ksjd.updateProject;

window.fetchItem = asd.fetchItem;
window.fetchItems = asd.fetchItems;
window.submitItem = asd.submitItem;
window.updateItem = asd.updateItem;
window.deleteItem = asd.deleteItem;