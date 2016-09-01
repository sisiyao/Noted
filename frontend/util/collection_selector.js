const collectionsSelector = state => {
  const collectionsArray = [];
  const collectionsObj = state.collections.collections;
  Object.keys(state.collections.collections).forEach(collectionId => {
    collectionsArray.push(collectionsObj[collectionId]);
  });
  return collectionsArray;
};

export default collectionsSelector;
