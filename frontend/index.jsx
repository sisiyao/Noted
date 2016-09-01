import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//testing
import { fetchAllCollections } from './util/collection_api_utils.js';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {
      session: {currentUser: window.currentUser, errors: []}
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  // testing purposes
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
