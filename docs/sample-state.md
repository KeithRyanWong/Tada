```js
{
  currentUser: {
    errors: [],
    id: 1
  },
  users: {
    errors: [],
    byId: {
      1: {
        id: 1,
        firstName: "Keith",
        lastName: "Wong",
        username: "KoolKeith",
        imageURL: "www.aklaej.com/Keith.png",
        follow_ids: [3, 4, 5]
      }
    }
  },
  projects: {
    errors: [],
    byId: {
      1: {
        id: 1
        title: "Cool Project",
        userId: 1,
        splashId: 12,
        item_order = [12, 54, 32]
        tag_ids: [1, 2, 3, 4],
        comment_ids: [23, 45, 76],
        likes: 89475,
        views: 90000
      }
    }
  },
  items: {
    errors: [],
    byId: {
      1: {
        id: 1
        projectId: 1,
        source_url,
        description: "This is a cool artwork"
      }
    }
  },
  comments: {
    errors: [],
    byId: {
      1: {
        id: 1
        projectId: 1,
        userId: 1,
        body: "This is so cool"
      }
    }
  },
  galleries: {
    errors: [],
    byId: {
      1: {
        id: 1,
        title: "Gallery of cool projects",
        description: "This is a gallery of cool posts",
        imageURL: "www.thisisapicture.com/asdkljf.png",
        project_ids: [1, 2, 3, 4]
      }
    }
  },
  tags: {
    errors: [],
    byId: {
      1: {
        id: 1
        name: ''
      }
    }
  },
  tagFilters: [1] // Used to track selected Tags for filtering of notes
}
```