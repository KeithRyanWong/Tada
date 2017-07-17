# DB Schema

### Users Table
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | 

### Projects Table
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
title           | string    | not null, indexed
splash_id       | integer   | not null, foreign key (references items)

### Items Table
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
order           | id        | not null, unique
source_url      | string    | not null
description     | text      |

### Likes Table (Join table)
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
user_id         | integer   | not null, foreign key (references users), indexed

### Comments Table (Join Table)
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
user_id         | integer   | not null, foreign key (references users), indexed
body            | text      | not null

### Views Table (Join table)
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
user_id         | integer   | not null, foreign key (references users), indexed

### GalleryLinks Table (Join table)
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
gallery_id      | integer   | not null, foreign key (references galleries), indexed

### Galleries Table
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
title           | string    | not null, indexed
description     | text      | not null
image_url       | string    | not null

### Tags Table
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
name            | string    | not null, indexed

### Taggings Table (Join table)
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
tag_id          | integer   | not null, foreign key (references tags), indexed

### Follows Table (Join table)
Column Name     | DataType  | Details
----------------|-----------|-----------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key (references users), indexed
followee_id     | integer   | not null, foreign key (references users), indexed

