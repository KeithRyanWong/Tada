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