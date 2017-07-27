import {RECEIVE_COMMENTS, RECEIVE_COMMENT, RECEIVE_ERRORS} from '../actions/comments_actions';

import merge from 'lodash/merge';

const defaultState = Object.freeze({
  errors: [],
  byId: {}
});

const commentsReducer = (state=defaultState, action) => {
    Object.freeze(state);
    
    switch(action.type) {
      case RECEIVE_COMMENT: 
        let byId = action.data.comments.byId;
        return merge({}, state, { byId, errors: [] });
      case RECEIVE_COMMENTS:
        return action.data.comments || defaultState;
      case RECEIVE_ERRORS:
        const errors = action.errors;
        return merge({}, state, { errors });
      default:
        return state;
    }
};

export default commentsReducer;