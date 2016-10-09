const collectionNameSelector = (collections, collectionIds) => {
  const selectedNames = [];
  collectionIds.forEach(id => {
    if (collections[id]) {
      selectedNames.push(collections[id].name);
    }
  });

  return selectedNames.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

export default collectionNameSelector;
