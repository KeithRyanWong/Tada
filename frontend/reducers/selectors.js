export const selectProjectItems = (state, project) => {
  let keys = Object.keys(state.items.byId);
  keys = keys.filter((key) => (project.item_order.includes(key.toString())));
  let items = keys.map((key) => (
    state.items.byId[key]
  ));

  return items.sort((item1, item2) => {
    if (project.item_order.indexOf(item1.id.toString()) <
        project.item_order.indexOf(item2.id.toString())) {
      return -1;
    } else {
      return 1;
    }
  });
};

export const selectUserProject = (state, userId) => {
  if (state.projects.byId === undefined || state.users.byId[userId] === undefined ) {
    return [];
  }
  let project_ids = state.users.byId[userId].projects;
  return project_ids.map(key => state.projects.byId[key]);
};

export const selectUserFollowedProjects = (state, userId) => {
  if (state.projects.byId === undefined || state.users.byId[userId] === undefined ) {
    return [];
  }
  let project_ids = state.users.byId[userId].starredProjects;

  if(!project_ids)return [];
  return project_ids.map(key => state.projects.byId[key]);
};

export const selectAllComments = (state) => {
  if (!state.comments.byId) return [];
  let keys = Object.keys(state.comments.byId);
  let comments = keys.map( key => (state.comments.byId[key]) ); 
  return comments.sort((comment1, comment2) => {
    if(Date.parse(comment1.createdAt) < Date.parse(comment2.createdAt)) {
      return -1;
    }
    return 1;
  });
};

export const selectUser = (state, userId) => {
  if (!state.users.byId || !state.users.byId[userId]) return {};
  return state.users.byId[userId];
};