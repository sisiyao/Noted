import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CollectionsMiddleware from './collections_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CollectionsMiddleware
);

export default RootMiddleware;
