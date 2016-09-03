const notesSelector = state => {
  const notesArray = [];
  const notesObj = state.notes.notes;
  Object.keys(notesObj).forEach(noteId => {
    notesArray.push(notesObj[noteId]);
  });
  return notesArray;
};

export default notesSelector;
