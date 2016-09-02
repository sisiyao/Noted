import { SidebarConstants } from '../actions/sidebar_actions';
import merge from 'lodash/merge';

const SidebarReducer = (state = true, action) => {
  switch(action.type) {
    case SidebarConstants.TOGGLE:
      return !state;
    default:
      return state;
  }
};

export default SidebarReducer;
