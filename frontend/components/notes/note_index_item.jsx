import React from 'react';
import { withRouter } from 'react-router';

const NoteIndexItem = ({note, router, destroyNote}) => {
  const linkToNote = () => router.push(`/note/${note.id}`);

  return (
    <div className="note-index-item">
      <div className="note-index-content" onClick={linkToNote}>
        <div className="note-index-title">{note.title}</div>
        <div className="note-index-body">{note.body}</div>
      </div>
      <div className="note-labels" onClick={linkToNote}></div>
      <div className="note-options">
        <div><i className="fa fa-paint-brush" aria-hidden="true" /></div>
        <div><i className="fa fa-trash-o" onClick={destroyNote.bind(null, note.id)}
          aria-hidden="true" /></div>
        <div className="note-options-space" onClick={linkToNote}></div>
      </div>
    </div>
  );
};

export default withRouter(NoteIndexItem);
