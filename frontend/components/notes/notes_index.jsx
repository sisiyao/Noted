import React from 'react';
import NoteIndexItem from './note_index_item';

class NotesIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (this.props.location.pathname === '/home') {
      this.props.fetchAllNotes({});
    }
    // else if (this.props.location.pathname.incudes('collection')){
    //   this.props.fetchAllNotes({collection_id: this.props.collectionFilter});
    // }
  }

  render () {
    const notes = this.props.notes.map(note => {
      return <NoteIndexItem key={`${note.id}${note.title}`} note={note}/>;
    });

    return (
      <div className="note-index">
        {notes}
      </div>
    );
  }
}

export default NotesIndex;
