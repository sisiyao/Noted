import React from 'react';

const NoteFormHeader = ({handleDelete, deleteButton, cancel}) => (
  <div className="note-form-options">
    <div className="note-form-toolbar">
      Toolbar
      <div className="note-form-delete"
        onClick={handleDelete}>
        {deleteButton()}</div>
    </div>
    <button className="note-form-cancel" onClick={cancel}>x</button>
  </div>
);

export default NoteFormHeader;
