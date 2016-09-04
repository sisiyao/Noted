const notesSelector = state => {
  const notesArray = [];
  const notesObj = state.notes.notes;
  Object.keys(notesObj).forEach(noteId => {
    notesObj[noteId]['updated_at'] = new Date(notesObj[noteId]['updated_at']);
    notesArray.push(notesObj[noteId]);
  });
  return notesArray.sort((a, b) => {
    if (a.updated_at < b.updated_at) {
      return 1;
    }
    if (a.updated_at > b.updated_at) {
      return -1;
    }
    return 0;
  });
};

export default notesSelector;
