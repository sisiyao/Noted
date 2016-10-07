import { SearchConstants } from '../actions/search_actions';
import merge from 'lodash/merge';

const _defaultSearch = Object.freeze({
  atRoute: false
});

const SearchReducer = (state = _defaultSearch, action) => {
  switch(action.type){
    case SearchConstants.EXIT_SEARCH:
      return {atRoute: false};
    case SearchConstants.ENTER_SEARCH:
      return {atRoute: true};
    default:
      return state;
  }
};

export default SearchReducer;
