
export const fetchItems = (projectId) => (
  $.ajax({
    url: `/api/projects/${projectId}/items`,
    method: "GET"
  })
);

export const submitItem = (item) => (
  $.ajax({
    url: `/api/items`,
    method: "POST",
    data: { item }
  })
);

export const fetchItem = (itemId) => (
  $.ajax({
    url: `/api/items/${itemId}`,
    method: "GET"
  })
);

export const updateItem = (item) => (
  $.ajax({
    url: `/api/items/${item.id}`,
    method: "PATCH",
    data:  { item }
  })
);

export const deleteItem = (item) => (
  $.ajax({
    url: `/api/items/${item.id}`,
    method: "DELETE"
  })
);