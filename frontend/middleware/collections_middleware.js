import { CollectionConstants, receiveAllCollections, receiveSingleCollection,
  removeCollection, receiveCollectionErrors } from '../actions/collection_actions';
import { fetchAllCollections, fetchSingleCollection, createCollection,
  updateCollection, destroyCollection } from '../util/collection_api_util';
import { hashHistory } from 'react-router';

const CollectionsMiddleware = ({dispatch}) => next => action => {
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveCollectionErrors(errors));
  };

  let success;

  switch(action.type){
    case CollectionConstants.FETCH_ALL_COLLECTIONS:
      success = collections => dispatch(receiveAllCollections(collections));
      fetchAllCollections(success);
      next(action);
      break;
    case CollectionConstants.FETCH_SINGLE_COLLECTION:
      success = collection => dispatch(receiveSingleCollection(collection));
      fetchSingleCollection(action.collectionId, success);
      next(action);
      break;
    case CollectionConstants.CREATE_COLLECTION:
      success = collection => {
        dispatch(receiveSingleCollection(collection));
        hashHistory.push('/home');
      };
      createCollection(action.collection, success, error);
      next(action);
      break;
    case CollectionConstants.UPDATE_COLLECTION:
      success = collection => {
        dispatch(receiveSingleCollection(collection));
        hashHistory.push('/home');
      };
      updateCollection(action.collection, success, error);
      next(action);
      break;
    case CollectionConstants.DESTROY_COLLECTION:
      success = (collection) => {
        dispatch(removeCollection(collection.collection.id));
        if (window.location.hash.includes(`#/collection/${action.collectionId}`)) {
          hashHistory.push('/home');
        }
      };
      destroyCollection(action.collectionId, success, error);
      next(action);
      break;
    default:
      return next(action);
  }
};

export default CollectionsMiddleware;
