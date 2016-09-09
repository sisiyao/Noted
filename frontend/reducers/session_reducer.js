import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, {currentUser: action.currentUser});
    case SessionConstants.LOGOUT:
      console.log("here");
      return _nullUser;
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, _nullUser, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
