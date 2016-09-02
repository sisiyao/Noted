export const CollectionConstants = {
  FETCH_ALL_COLLECTIONS: "FETCH_ALL_COLLECTIONS",
  CREATE_COLLECTION: "CREATE_COLLECTION",
  UPDATE_COLLECTION: "UPDATE_COLLECTION",
  DESTROY_COLLECTION: "DESTROY_COLLECTION",
  RECEIVE_ALL_COLLECTIONS: "RECEIVE_ALL_COLLECTIONS",
  RECEIVE_SINGLE_COLLECTION: "RECEIVE_SINGLE_COLLECTION",
  REMOVE_COLLECTION: "REMOVE_COLLECTION",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchAllCollections = () => ({
  type: CollectionConstants.FETCH_ALL_COLLECTIONS
});

export const createCollection = collection => ({
  type: CollectionConstants.CREATE_COLLECTION,
  collection
});

export const updateCollection = collection => ({
  type: CollectionConstants.UPDATE_COLLECTION,
  collection
});

export const destroyCollection = collectionId => ({
  type: CollectionConstants.DESTROY_COLLECTION,
  collectionId
});

export const receiveAllCollections = collections => ({
  type: CollectionConstants.RECEIVE_ALL_COLLECTIONS,
  collections
});

export const receiveSingleCollection = collection => ({
  type: CollectionConstants.RECEIVE_SINGLE_COLLECTION,
  collection
});

export const removeCollection = collectionId => ({
  type: CollectionConstants.REMOVE_COLLECTION,
  collectionId
});

export const receiveErrors = errors => ({
  type: CollectionConstants.RECEIVE_ERRORS,
  errors
});
