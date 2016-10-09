import React from 'react';
import MdColorLens from 'react-icons/lib/md/color-lens';

const NoteFormHeader = ({handleDelete, deleteButton, cancel, openColorModal}) => (
  <div className="note-form-options">
    <div className="note-form-color" onClick={openColorModal}>
      <MdColorLens /></div>
    <div className="note-form-delete" onClick={handleDelete}>
      {deleteButton()}</div>
    <div className="note-form-cancel" onClick={cancel}>
      <i className="fa fa-times" aria-hidden="true" /></div>
  </div>
);

export default NoteFormHeader;
