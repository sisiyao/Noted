import { connect } from 'react-redux';
import { createNote, updateNote, destroyNote }
  from '../../actions/note_actions';
import NoteForm from './note_form';

const mapStateToProps = state => ({
  errors: state.notes.errors,
  notes: state.notes.notes
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === "new-note" ? createNote : updateNote;

  return {
    processForm: form => dispatch(processForm(form)),
    destroyNote: noteId => dispatch(destroyNote(noteId)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
