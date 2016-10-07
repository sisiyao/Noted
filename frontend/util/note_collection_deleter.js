const noteCollectionDeleter = (collectionId, notes) => {
  Object.keys(notes).forEach(noteID => {
    notes[noteID].collection_ids = notes[noteID].collection_ids.filter(id => {
      return id !== collectionId;
    });
  });
  return notes;
};

export default noteCollectionDeleter;
