import { NoteConstants } from '../actions/note_actions';
import merge from 'lodash/merge';

const _nullNotes = {notes: {}, errors: [], formStatus: null};

const NotesReducer = (state = _nullNotes, action) => {
  let newNotes;
  switch (action.type) {
    case NoteConstants.RECEIVE_ALL_NOTES:
      return merge({}, _nullNotes, {notes: action.notes, formStatus: null});
    case NoteConstants.RECEIVE_SINGLE_NOTE:
      const status = action.note.status;
      const noteId = action.note.note.id;
      newNotes = merge(
        {},
        state.notes,
        {[noteId]: action.note.note}
      );
      return merge({}, _nullNotes, {notes: newNotes, formStatus: status});
    case NoteConstants.REMOVE_NOTE:
      newNotes = merge({}, state.notes);
      delete newNotes[`${action.noteId}`];
      return merge({}, _nullNotes, {notes: newNotes, formStatus: null});
    case NoteConstants.RECEIVE_NOTE_ERRORS:
      return merge({}, state, {errors: action.errors, formStatus: 'error'});
    default:
      return state;
  }
};

export default NotesReducer;
