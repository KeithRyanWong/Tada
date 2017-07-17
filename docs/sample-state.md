```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createProject: {errors: ["Title can't be blank"]}
  },
  projects: {
    1: {
      title: "Project",
      user_id: 1,
      splash_id: 12
    }
  },
  items: {
    1: {
      project_id: 1,
      title: 1,
      description: "This is a cool artwork"
    }
  }
  comments: {
    project_id: 1,
    user_id: 1,
    body: "This is so cool"
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
```