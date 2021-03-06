const noteSearch = (searchParams, notes, collections) => {
  const results = [];
  const search = searchParams.toLowerCase();
  notes.forEach(note => {
    let title = note.title ? note.title.toLowerCase() : "";
    let body = note.body ? note.body.toLowerCase() : "";
    let text = title + body;
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
