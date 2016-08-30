import { SessionConstants, receiveCurrentUser, receiveErrors }
  from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));

  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      break;
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, success, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
