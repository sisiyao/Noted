import React from 'react';

const NoteIndexItem = ({note}) => {
  return (
    <div className="note">
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

export default NoteIndexItem;
