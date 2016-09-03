import { CollectionConstants } from '../actions/collection_actions';
import merge from 'lodash/merge';

const _nullCollections = {collections: {}, errors: []};

const CollectionsReducer = (state = _nullCollections, action) => {
  switch (action.type) {
    case CollectionConstants.RECEIVE_ALL_COLLECTIONS:
      return merge({}, _nullCollections, {collections: action.collections});
    case CollectionConstants.RECEIVE_SINGLE_COLLECTION:
      const collectionId = action.collection.id;
      const newCollections = merge(
        {},
        state.collections,
        {[collectionId]: action.collection}
      );
      return merge({}, _nullCollections, {collections: newCollections});
    case CollectionConstants.REMOVE_COLLECTION:
      const filteredCollections = merge({}, state.collections);
      delete filteredCollections[`${action.collectionId}`];
      return merge({}, _nullCollections, {collections: filteredCollections});
    case CollectionConstants.RECEIVE_COLLECTION_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default CollectionsReducer;
