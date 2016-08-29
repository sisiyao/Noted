# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Notes

- `GET /api/notes`
  - Notes index/search
  - accepts `collection_name` query param to list notes by tag
  - accepts `search_input` query param to filter notes by search results
  - accepts pagination params (bonus)
- `POST /api/notes` - I want to include adding / deleting a note's collection tags in the note form as checkboxes (or should this be a separate form?)
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Collections

- A note's collection tags will be included in the note show template
- `GET /api/collections`
- `POST /api/collections`
- `DELETE /api/collections/:id`
