import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import CollectionsReducer from '../reducers/collections_reducer';
import SidebarReducer from '../reducers/sidebar_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  collections: CollectionsReducer,
  sidebar: SidebarReducer
});

export default RootReducer;
