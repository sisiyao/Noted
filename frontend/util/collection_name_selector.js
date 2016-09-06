const collectionNameSelector = (collections, collectionIds) => {
  const selectedNames = [];
  collectionIds.forEach(id => {
    selectedNames.push(collections[id].name);
  });

  return selectedNames;
};

export default collectionNameSelector;
