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

export const fetchAllNotes = () => ({
  type: NoteConstants.FETCH_ALL_NOTES
});

export const createNote = collection => ({
  type: NoteConstants.CREATE_NOTE,
  collection
});

export const updateNote = collection => ({
  type: NoteConstants.UPDATE_NOTE,
  collection
});

export const destroyNote = collectionId => ({
  type: NoteConstants.DESTROY_NOTE,
  collectionId
});

export const receiveAllNotes = collections => ({
  type: NoteConstants.RECEIVE_ALL_NOTES,
  collections
});

export const receiveSingleNote = collection => ({
  type: NoteConstants.RECEIVE_SINGLE_NOTE,
  collection
});

export const removeNote = collectionId => ({
  type: NoteConstants.REMOVE_NOTE,
  collectionId
});

export const receiveNoteErrors = errors => ({
  type: NoteConstants.RECEIVE_NOTE_ERRORS,
  errors
});
