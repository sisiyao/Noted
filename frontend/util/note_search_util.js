const noteSearch = (searchParams, notes, collections) => {
  const results = [];
  const search = searchParams.toLowerCase();
  notes.forEach(note => {
    const collNames = note.collection_ids.map(id => {
      return collections[id].name.toLowerCase().includes(search);
    });

    if ( note.title.toLowerCase().includes(search)
      || note.body.toLowerCase().includes(search)
      || collNames.includes(true)) {
      results.push(note);
    }
  });

  return results;
};

export default noteSearch;
