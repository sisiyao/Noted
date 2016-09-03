import React from 'react';

class NotesIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllNotes();
  }

  render () {
    const notes = this.props.notes.map(note => {
      return <li>{note.title}: {note.body}</li>;
    });
    
    return (
      <div>
        NOTE INDEX
        <ul>{notes}</ul>
      </div>
    );
  }
}

export default NotesIndex;
