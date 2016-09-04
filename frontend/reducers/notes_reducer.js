import { NoteConstants } from '../actions/note_actions';
import merge from 'lodash/merge';

const _nullNotes = {notes: {}, errors: []};

const NotesReducer = (state = _nullNotes, action) => {
  let newNotes;
  switch (action.type) {
    case NoteConstants.RECEIVE_ALL_NOTES:
      return merge({}, _nullNotes, {notes: action.notes});
    case NoteConstants.RECEIVE_SINGLE_NOTE:
      const noteId = action.note.id;
      newNotes = merge(
        {},
        state.notes,
        {[noteId]: action.note}
      );
      return merge({}, _nullNotes, {notes: newNotes});
    case NoteConstants.REMOVE_NOTE:
      newNotes = merge({}, state.notes);
      delete newNotes[`${action.noteId}`];
      return merge({}, _nullNotes, {notes: newNotes});
    case NoteConstants.RECEIVE_NOTE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case NoteConstants.CLEAR_NOTE_FORM_ERRORS:
      return {notes: state.notes, errors: []};
    default:
      return state;
  }
};

export default NotesReducer;
