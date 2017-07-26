import { RECEIVE_PROJECT, RECEIVE_PROJECTS, RECEIVE_ERRORS } from '../actions/projects_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import merge from 'lodash/merge';

const projectsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
    case RECEIVE_USER:
      if(action.data.items === undefined) {
        return state;
      }
      const byId = action.data.items.byId;
      return merge({}, state, { byId });
    // case RECEIVE_ERRORS:
    //   const errors = action.errors;
    //   return merge({}, state, { errors });
    default:
      return state;
  }
};

export default projectsReducer;