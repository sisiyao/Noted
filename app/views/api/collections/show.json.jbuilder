json.collection do
  json.partial! "api/collections/collection", coll: @collection
end
json.status @status
