import { CollectionConstants, receiveAllCollections, receiveSingleCollection,
  removeCollection, receiveErrors } from '../actions/collection_actions';
import { fetchAllCollections, createCollection, updateCollection,
  destroyCollection } from '../util/collection_api_utils';

const CollectionsMiddleware = ({getState, dispatch}) => next => action => {
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  let success;

  switch(action.type){
    case CollectionConstants.FETCH_ALL_COLLECTIONS:
      success = collections => dispatch(receiveAllCollections(collections));
      fetchAllCollections(success);
      next(action);
      break;
    case CollectionConstants.CREATE_COLLECTION:
      success = collection => dispatch(receiveSingleCollection(collection));
      createCollection(action.collection, success, error);
      next(action);
      break;
    case CollectionConstants.UPDATE_COLLECTION:
      success = collection => dispatch(receiveSingleCollection(collection));
      updateCollection(action.collection, success, error);
      next(action);
      break;
    case CollectionConstants.DESTROY_COLLECTION:
      success = (collection) => dispatch(removeCollection(collection.id));
      destroyCollection(action.collectionId, success, error);
      break;
    default:
      return next(action);
  }
};

export default CollectionsMiddleware;
