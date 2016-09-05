import { connect } from 'react-redux';
import HeaderBar from './header_bar';
import { logout } from '../../actions/session_actions';
import { sidebarToggle } from '../../actions/sidebar_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  sidebarToggle: () => dispatch(sidebarToggle())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar);
