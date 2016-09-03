import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CollectionsMiddleware from './collections_middleware';
import NotesMiddleware from './notes_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CollectionsMiddleware,
  NotesMiddleware
);

export default RootMiddleware;
