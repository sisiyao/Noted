const noteFilter = (collectionName, notes, collections) => {
  const results = [];
  notes.forEach(note => {
    const match = note.collection_ids.filter(id => {
      return collections[id].name === collectionName;
    });

    if (match.length > 0) {
      results.push(note);
    }
  });

  return results;
};

export default noteFilter;
