import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { fetchAllNotes, destroyNote }
  from '../../actions/note_actions';
import notesSelector from '../../util/note_selector';

const mapStateToProps = state => ({
  notes: notesSelector(state),
  errors: state.notes.errors,
  collections: state.collections.collections
});

const mapDispatchToProps = dispatch => ({
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  destroyNote: (noteId, actionOrigin) => dispatch(destroyNote(noteId, actionOrigin)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
