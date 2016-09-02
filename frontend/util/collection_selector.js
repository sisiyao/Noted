const collectionsSelector = state => {
  const collectionsArray = [];
  const collectionsObj = state.collections.collections;
  Object.keys(collectionsObj).forEach(collectionId => {
    collectionsArray.push(collectionsObj[collectionId]);
  });
  return collectionsArray;
};

export default collectionsSelector;
