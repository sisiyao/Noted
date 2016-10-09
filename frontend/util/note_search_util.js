const noteSearch = (searchParams, notes, collections) => {
  const results = [];
  const search = searchParams.toLowerCase();
  notes.forEach(note => {
    let text = note.title.toLowerCase() + note.body.toLowerCase();
    const collNames = note.collection_ids.forEach(id => {
      text += collections[id].name.toLowerCase();
    });

    if (text.includes(search)) {
      results.push(note);
    }
  });

  return results;
};

export default noteSearch;
