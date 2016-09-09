import { CollectionConstants } from '../actions/collection_actions';
import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullCollections = {collections: {}, errors: [], formStatus: null};

const CollectionsReducer = (state = _nullCollections, action) => {
  let newCollections;
  switch (action.type) {
    case CollectionConstants.RECEIVE_ALL_COLLECTIONS:
      return merge({}, _nullCollections, {collections: action.collections});
    case CollectionConstants.RECEIVE_SINGLE_COLLECTION:
      const status = action.collection.status;
      const collectionId = action.collection.collection.id;
      newCollections = merge(
        {},
        state.collections,
        {[collectionId]: action.collection.collection}
      );
      return merge({}, _nullCollections,
        {collections: newCollections, formStatus: status});
    case CollectionConstants.REMOVE_COLLECTION:
      newCollections = merge({}, state.collections);
      delete newCollections[`${action.collectionId}`];
      return merge({}, _nullCollections, {collections: newCollections});
    case CollectionConstants.RECEIVE_COLLECTION_ERRORS:
      return merge({}, state, {errors: action.errors, formStatus: 'error'});
    case SessionConstants.CLEAR_STORE:
      return _nullCollections;
    default:
      return state;
  }
};

export default CollectionsReducer;
