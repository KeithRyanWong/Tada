export const fetchUserProjects = (id) => (
  $.ajax({
    url: `/api/users/${id}/projects`, 
    method: 'GET'
  })
);

export const fetchProjects = () => (
  $.ajax({
    url: '/api/projects',
    method: 'GET'
  })
);

export const fetchProject = (id) => (
  $.ajax({
    url: `/api/projects/${id}`, 
    method: 'GET'
  })
);

export const submitProject = (project) => (
  $.ajax({
    url: `/api/projects`, 
    method: 'POST',
    data: { project }
  })
);

export const updateProject = (project) => (
  $.ajax({
    url: `/api/projects/${project.id}`, 
    method: 'PATCH',
    data: { project }
  })
);

