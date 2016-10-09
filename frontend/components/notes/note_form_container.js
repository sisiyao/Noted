import { connect } from 'react-redux';
import { createNote, updateNote, destroyNote, fetchSingleNote }
  from '../../actions/note_actions';
import NoteForm from './note_form';

const mapStateToProps = state => ({
  errors: state.notes.errors,
  notes: state.notes.notes,
  formStatus: state.notes.formStatus,
  noteId: state.notes.createdNote,
  collections: state.collections.collections
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);

  return {
    fetchSingleNote: noteId => dispatch(fetchSingleNote(noteId)),
    createNote: note => dispatch(createNote(note)),
    updateNote: note => dispatch(updateNote(note)),
    destroyNote: noteId => dispatch(destroyNote(noteId)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
