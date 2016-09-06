json.id note.id
json.title note.title
json.body note.body
json.color note.color
json.image_url note.image_url
json.updated_at note.updated_at
json.collection_ids note.collections.map { |coll| coll.id }
