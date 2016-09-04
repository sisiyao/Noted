import React from 'react';
import { withRouter } from 'react-router';

const NoteIndexItem = ({note, router}) => {
  const linkToNote = () => router.push(`/note/${note.id}`);

  return (
    <div className="note" onClick={linkToNote}>
      <div>{note.title}</div>
      <div>{note.body}</div>
      <div className="note-labels"></div>
      <div className="note-options">
        <div>
          <i className="fa fa-paint-brush" aria-hidden="true"></i>
        </div>
        <div>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NoteIndexItem);
