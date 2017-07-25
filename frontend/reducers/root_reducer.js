import sessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import itemsReducer from './items_reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: sessionReducer,
  projects: projectsReducer,
  items: itemsReducer
});

export default rootReducer;