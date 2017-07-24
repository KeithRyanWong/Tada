import { RECEIVE_PROJECT, RECEIVE_PROJECTS, RECEIVE_ERRORS } from '../actions/projects_actions';
import merge from 'lodash/merge';

const projectsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      const byId = action.projects.byId;
      return merge({}, state, { byId });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default projectsReducer;