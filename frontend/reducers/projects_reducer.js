import { RECEIVE_PROJECT, RECEIVE_PROJECTS, RECEIVE_ERRORS } from '../actions/projects_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { LIKE, UNLIKE } from '../actions/likes_actions';
import merge from 'lodash/merge';

const projectsReducer = (state={}, action) => {
  Object.freeze(state);

  let newState = {};
  let user;
  let project;

  switch(action.type) {
    case RECEIVE_PROJECTS:
    case RECEIVE_USER:
      const byId = action.data.projects.byId;
      return merge({}, state, { byId });
    case LIKE:
      newState = Object.assign({}, state);
      user = action.comment.user_id;
      project = action.comment.project_id;
      newState.byId[project].likes.push(user);
      return newState;
    case UNLIKE:
      newState = Object.assign({}, state);
      user = action.comment.user_id;
      project = action.comment.project_id;
      let i = newState.byId[project].likes.indexOf(user);
      newState.byId[project].likes.splice(i, 1);
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default projectsReducer;