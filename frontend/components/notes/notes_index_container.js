import { connect } from 'react-redux';
import NotesIndex from './notes_index.jsx';
import { fetchAllNotes, destroyNote }
  from '../../actions/note_actions';
import notesSelector from '../../util/note_selector';

const mapStateToProps = state => ({
  notes: notesSelector(state),
  errors: state.notes.errors
});

const mapDispatchToProps = dispatch => ({
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  destroyNote: noteId => dispatch(destroyNote(noteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
