import { NoteConstants } from '../actions/note_actions';
import merge from 'lodash/merge';

const _nullNotes = {notes: {}, errors: []};

const NotesReducer = (state = _nullNotes, action) => {
  switch (action.type) {
    case NoteConstants.RECEIVE_ALL_NOTES:
      return merge({}, _nullNotes, {notes: action.notes});
    case NoteConstants.RECEIVE_SINGLE_NOTE:
      const noteId = action.note.id;
      const newNotes = merge(
        {},
        state.notes,
        {[noteId]: action.note}
      );
      return merge({}, _nullNotes, {notes: newNotes});
    case NoteConstants.REMOVE_NOTE:
      const filteredNotes = merge({}, state.notes);
      delete filteredNotes[`${action.noteId}`];
      return merge({}, _nullNotes, {notes: filteredNotes});
    case NoteConstants.RECEIVE_NOTE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case NoteConstants.CLEAR_NOTE_FORM_ERRORS:
      return {notes: state.notes, errors: []};
    default:
      return state;
  }
};

export default NotesReducer;
