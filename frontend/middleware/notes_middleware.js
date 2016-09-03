import { NoteConstants, receiveAllNotes, receiveSingleNote,
  removeNote, receiveNoteErrors } from '../actions/note_actions';
import { fetchAllNotes, createNote, updateNote,
  destroyNote } from '../util/note_api_util';

const NotesMiddleware = ({dispatch}) => next => action => {
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveNoteErrors(errors));
  };

  let success;

  switch(action.type){
    case NoteConstants.FETCH_ALL_NOTES:
      success = notes => dispatch(receiveAllNotes(notes));
      fetchAllNotes(success);
      next(action);
      break;
    case NoteConstants.CREATE_NOTE:
      success = note => dispatch(receiveSingleNote(note));
      createNote(action.note, success, error);
      next(action);
      break;
    case NoteConstants.UPDATE_NOTE:
      success = note => dispatch(receiveSingleNote(note));
      updateNote(action.note, success, error);
      next(action);
      break;
    case NoteConstants.DESTROY_NOTE:
      success = (note) => dispatch(removeNote(note.id));
      destroyNote(action.noteId, success, error);
      next(action);
      break;
    default:
      return next(action);
  }
};

export default NotesMiddleware;
