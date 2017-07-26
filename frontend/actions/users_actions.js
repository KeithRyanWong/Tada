export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as APIUtil from '../util/users_api';

// synchronous actions
export const receiveUser = (data) => ({
  type: RECEIVE_USER,
  data
});

//potential problems, errors object is not the usual
export const receiveErrors = (data) => ({
  type: RECEIVE_ERRORS,
  errors: data.users.errors
});


export const requestUser = userId => dispatch => {
  APIUtil
    .fetchUser(userId)
    .then(data => dispatch(receiveUser(data)),
          error => dispatch(receiveErrors(error.responseJSON)));
};

window.requestUser = requestUser;