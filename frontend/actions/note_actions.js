export const NoteConstants = {
  FETCH_ALL_NOTES: "FETCH_ALL_NOTES",
  CREATE_NOTE: "CREATE_NOTE",
  UPDATE_NOTE: "UPDATE_NOTE",
  DESTROY_NOTE: "DESTROY_NOTE",
  RECEIVE_ALL_NOTES: "RECEIVE_ALL_NOTES",
  RECEIVE_SINGLE_NOTE: "RECEIVE_SINGLE_NOTE",
  REMOVE_NOTE: "REMOVE_NOTE",
  RECEIVE_NOTE_ERRORS: "RECEIVE_NOTE_ERRORS"
};

export const fetchAllNotes = filters => ({
  type: NoteConstants.FETCH_ALL_NOTES,
  filters
});

export const createNote = note => ({
  type: NoteConstants.CREATE_NOTE,
  note
});

export const updateNote = note => ({
  type: NoteConstants.UPDATE_NOTE,
  note
});

export const destroyNote = noteId => ({
  type: NoteConstants.DESTROY_NOTE,
  noteId
});

export const receiveAllNotes = notes => ({
  type: NoteConstants.RECEIVE_ALL_NOTES,
  notes
});

export const receiveSingleNote = note => ({
  type: NoteConstants.RECEIVE_SINGLE_NOTE,
  note
});

export const removeNote = noteId => ({
  type: NoteConstants.REMOVE_NOTE,
  noteId
});

export const receiveNoteErrors = errors => ({
  type: NoteConstants.RECEIVE_NOTE_ERRORS,
  errors
});
