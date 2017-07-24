import * as APIUtil from "../util/projects_api";

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveErrors = ({ errors }) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestAllProjects = () => (dispatch) => {
  APIUtil.fetchProjects().then(data => dispatch(receiveProjects(data)), errs => dispatch(receiveErrors(errs.responseJSON)));
};

window.requestAllProjects = requestAllProjects;
window.fetchProjects = APIUtil.fetchProjects;