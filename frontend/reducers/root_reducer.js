import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import CollectionsReducer from '../reducers/collections_reducer';
import SidebarReducer from '../reducers/sidebar_reducer';
import NotesReducer from '../reducers/notes_reducer';
import SearchReducer from '../reducers/search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  collections: CollectionsReducer,
  sidebar: SidebarReducer,
  notes: NotesReducer,
  search: SearchReducer
});

export default RootReducer;
