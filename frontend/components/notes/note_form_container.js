import { connect } from 'react-redux';
import { createNote, updateNote, destroyNote, fetchSingleNote }
  from '../../actions/note_actions';
import NoteForm from './note_form';

const mapStateToProps = state => ({
  errors: state.notes.errors,
  notes: state.notes.notes,
  formStatus: state.notes.formStatus
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === "new-note" ? createNote : updateNote;

  return {
    fetchSingleNote: noteId => dispatch(fetchSingleNote(noteId)),
    processForm: form => dispatch(processForm(form)),
    destroyNote: noteId => dispatch(destroyNote(noteId)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
