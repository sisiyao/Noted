import { NoteConstants } from '../actions/note_actions';
import merge from 'lodash/merge';

const _nullNotes = {notes: {}, errors: [], formStatus: null};

const NotesReducer = (state = _nullNotes, action) => {
  let newNotes, status;
  switch (action.type) {
    case NoteConstants.RECEIVE_ALL_NOTES:
      return merge({}, _nullNotes, {notes: action.notes});
    case NoteConstants.RECEIVE_SINGLE_NOTE:
      status = action.note.status;
      const noteId = action.note.note.id;
      newNotes = merge(
        {},
        state.notes,
        {[noteId]: action.note.note}
      );
      return merge({}, _nullNotes, {notes: newNotes, formStatus: status});
    case NoteConstants.REMOVE_NOTE:
      status = action.note.status;
      newNotes = merge({}, state.notes);
      delete newNotes[`${action.note.note.id}`];
      return merge({}, _nullNotes, {notes: newNotes, formStatus: status});
    case NoteConstants.RECEIVE_NOTE_ERRORS:
      return merge({}, state, {errors: action.errors, formStatus: 'error'});
    default:
      return state;
  }
};

export default NotesReducer;
