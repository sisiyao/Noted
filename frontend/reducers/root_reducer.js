import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import CollectionsReducer from '../reducers/collections_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  collections: CollectionsReducer
});

export default RootReducer;
