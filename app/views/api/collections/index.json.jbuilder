@collections.each do |coll|
  json.set! coll.id do
    json.partial! "api/collections/collection", coll: coll
  end
end
