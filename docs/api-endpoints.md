# API Endpoints

## HTML API
---
## Root
 - `GET /` - loads react web app

## JSON API
---
## Users
 - `POST /api/users`
 - `PUT /api/users/:id`

## Session
 - `POST /api/session`
 - `DELETE /api/session`

## Projects
 - `GET /api/users/:id/posts`
 - `POST /api/users/:id/posts`
 - `GET /api/users/:id/posts/new`
 - `GET /api/users/:id/posts/:post_id`
 - `DELETE /api/users/:id/posts/:post_id`

## Items
 - `GET /api/users/:id/posts/:post_id/items`
 - `POST /api/users/:id/posts/:post_id/items`
 - `GET /api/users/:id/posts/:post_id/items/new`
 - `GET /api/users/:id/posts/:post_id/items/:item_id`
 - `DELETE /api/users/:id/posts/:post_id/items/:item_id`

## Likes
 - `POST /api/likes`
 - `DELETE /api/likes`

## Comments
 - `POST /api/comments`
 - `DELETE /api/comments`
