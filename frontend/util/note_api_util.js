export const fetchAllNotes = (success) => {
  $.ajax({
    url: "/api/notes",
    method: "GET",
    success
  });
};

export const fetchSingleNote = (noteId, success) => {
  $.ajax({
    url: `/api/notes/${noteId}`,
    method: "GET",
    success
  });
};

export const createNote = (note, success, error) => {
  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: {note: {title: note.title, body: note.body,
      collection_ids: note.collection_ids, color: note.color}},
    success,
    error
  });
};

export const updateNote = (note, success, error) => {
  $.ajax({
    url: `/api/notes/${note.id}`,
    method: "PATCH",
    data: {note: {title: note.title, body: note.body,
      collection_ids: note.collection_ids, color: note.color}},
    success,
    error
  });
};

export const destroyNote = (noteId, success, error) => {
  $.ajax({
    url: `/api/notes/${noteId}`,
    method: "DELETE",
    success,
    error
  });
};
