# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
color       | string    | has default value
image_url   | string    |

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## collection_taggings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
note_id       | integer   | not null, foreign key (references notes), indexed, unique [collection_id]
collection_id | integer   | not null, foreign key (references collections), indexed
