json.note do
  json.partial! "api/notes/note", note: @note
end
json.status @status
