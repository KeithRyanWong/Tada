export const like = (projectId) => (
  $.ajax({
    url: `/api/projects/${projectId}/likes`,
    method: "POST"
  })
);

export const unlike = (projectId) => (
  $.ajax({
    url: `/api/projects/${projectId}/likes`,
    method: "DELETE"
  })
);