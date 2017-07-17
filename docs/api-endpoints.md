# API Endpoints

## HTML API
---
## Root
 - `GET    /` - loads react web app

## JSON API
---
## Users
 - `POST   /api/users` - create a new user
 - `PUT    /api/users/:id` - update a user's info? don't think I need for now

## Session
 - `POST   /api/session` - start a new session
 - `DELETE /api/session` - logout a session

## Projects
 - `GET    /api/projects` - fetch all projects from database
 - `GET    /api/users/:user_id/projects` - fetch all projects for a user
 - `POST   /api/projects` - create a new project
 - `GET    /api/projects/:id` - get a project by id
 - `PATCH  /api/projects/:id` - update a project, should I use PUT?
 - `DELETE /api/projects/:id` - delete a project

## Items
 - `GET    /api/projects/:project_id/items` - get all items by their project id
 - `POST   /api/items` - create a new item for project, does it need to be nested under project id? answer: no, cause edit link should be on project
 - `GET    /api/items/:id` - get item by id (should also have access to rest of project items)
 - `PATCH  /api/items/:id` - update item with edits (should be description attr only)
 - `DELETE /api/items/:id` - delete item

## Comments
 - `GET    /api/projects/:project_id/comments` - get all comments for a project
 - `POST   /api/comments` - create a new comment for a project
 - `PATCH  /api/comments/:id` - update a comment with edits
 - `DELETE /api/comments/:id` - delete a comment
 
## Likes
 - `POST   /api/likes` - create a like on a post
 - `DELETE /api/likes/:id` - unlike a post

## Views
 - `POST   /api/views` - create a view linking a user to a project

## Tags
 - `POST   /api/tags` - create a new tag

## Taggings
 - `POST   /api/taggings` - attach a tag to a project
 - `DELETE /api/taggings/:id` - remove a tag from a project

## Follows
 - `POST   /api/follows` - follow a user
 - `DELETE /api/follows/:id` - unfollow a user

 ## Galleries
 - `GET    /api/galleries` - fetch all galleries
 - `POST   /api/galleries` - create a new gallery
 - `GET    /api/galleries/:id` - get a gallery by id
 - `PATCH  /api/galleries/:id` - update a gallery with edits
 - `DELETE /api/galleries/:id` - delete a gallery

 ## Gallery Links
 - `POST   /api/gallerylinks` - add a project to a gallery
 - `DELETE /api/gallerylinks/:id` - remove a project from a gallery