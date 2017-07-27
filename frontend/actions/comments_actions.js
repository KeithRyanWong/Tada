import * as APIUtil from "../util/comments_api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveComments = (data) => ({
  type: RECEIVE_COMMENTS,
  data
});

export const receiveComment = (data) => ({
  type: RECEIVE_COMMENT,
  data
});

export const receiveErrors = ({ comments }) => ({
  type: RECEIVE_ERRORS,
  errors: comments.errors
});

export const requestComments = (projectId) => (dispatch) => {
  APIUtil.fetchComments(projectId).then(
    data => dispatch(receiveComments(data)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const submitComment = (comment) => (dispatch) => {
  APIUtil.submitComment(comment).then(
    data => dispatch(receiveComment(data)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};