const collectionsSelector = state => {
  const collectionsArray = [];
  const collectionsObj = state.collections.collections;
  Object.keys(collectionsObj).forEach(collectionId => {
    collectionsArray.push(collectionsObj[collectionId]);
  });
  return collectionsArray.sort((a,b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

export default collectionsSelector;
