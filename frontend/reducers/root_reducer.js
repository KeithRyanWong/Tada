import sessionReducer from './session_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: sessionReducer
});

export default rootReducer;