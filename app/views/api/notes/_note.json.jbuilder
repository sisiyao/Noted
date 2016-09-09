json.id note.id
json.title note.title
json.body note.body
json.color note.color
json.updated_at note.updated_at
json.collection_ids note.collections.map { |coll| coll.id }
json.bodyHeight calculate_height(note, "body")
json.titleHeight calculate_height(note, "title")
