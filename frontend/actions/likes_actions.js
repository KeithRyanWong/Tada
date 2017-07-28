import * as APIUtil from '../util/likes_api';

export const LIKE = "LIKE";
export const UNLIKE = "UNLIKE";

export const like = (comment) => ({
  type: LIKE,
  comment
});

export const unlike = (comment) => ({
  type: UNLIKE,
  comment
});

export const likeProject = (projectId) => dispatch => {
  APIUtil.like(projectId).then(
    comment => dispatch(like(comment))
  );
};

export const unlikeProject = (projectId) => dispatch => {
  APIUtil.unlike(projectId).then(
    comment => dispatch(unlike(comment))
  );
};