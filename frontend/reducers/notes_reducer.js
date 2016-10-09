import { NoteConstants } from '../actions/note_actions';
import { SessionConstants } from '../actions/session_actions';
import { CollectionConstants } from '../actions/collection_actions';
import merge from 'lodash/merge';
import noteCollectionDeleter from '../util/note_collection_deleter';
import { hashHistory } from 'react-router';

const _nullNotes = {notes: {}, errors: [], formStatus: null};

const NotesReducer = (state = _nullNotes, action) => {
  let newNotes;
  switch (action.type) {
    case NoteConstants.RECEIVE_ALL_NOTES:
      return merge({}, _nullNotes, {notes: action.notes});
    case NoteConstants.RECEIVE_SINGLE_NOTE:
      const noteId = action.note.note.id;
      newNotes = merge(
        {},
        state.notes,
        {[noteId]: action.note.note}
      );
      if (action.actionType === 'created') {
        setTimeout(() => hashHistory.push(`/note/${noteId}`), 100);
      }
      return merge({}, _nullNotes, {notes: newNotes});
    case NoteConstants.REMOVE_NOTE:
      newNotes = merge({}, state.notes);
      delete newNotes[`${action.note.note.id}`];
      return merge({}, _nullNotes, {notes: newNotes, formStatus: "deleted"});
    case NoteConstants.RECEIVE_NOTE_ERRORS:
      return merge({}, state, {errors: action.errors, formStatus: null});
    case SessionConstants.CLEAR_STORE:
      return _nullNotes;
    case CollectionConstants.REMOVE_COLLECTION:
      newNotes = noteCollectionDeleter(action.collectionId, state.notes);
      return merge({}, _nullNotes, {notes: newNotes});
    default:
      return state;
  }
};

export default NotesReducer;
