import React from 'react';

const NoteFormHeader = ({handleDelete, deleteButton, cancel}) => (
  <div className="note-form-options">
    <div className="note-form-delete"
      onClick={handleDelete}>
      {deleteButton()}</div>
    <div className="note-form-cancel" onClick={cancel}>
      <i className="fa fa-times" aria-hidden="true" /></div>
  </div>
);

export default NoteFormHeader;
