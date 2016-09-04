import React from 'react';
import { withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class HeaderBar extends React.Component {
  constructor (props) {
    super(props);
    this.linkToHome = this.linkToHome.bind(this);
    this.linkToNewNote = this.linkToNewNote.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    this.redirectIfLoggedOut(nextProps.loggedIn);
    return nextProps.loggedIn === this.props.loggedIn;
  }

  redirectIfLoggedOut (loggedIn) {
    if (!loggedIn) {
			this.props.router.push("/login");
		}
  }

  linkToHome () {
    this.props.router.push("/home");
  }

  linkToNewNote () {
    this.props.router.push("/new-note");
  }

  render () {
    return (
      <div className="header-bar">
        <div className="header-bar-left">
          <div className="header-menu-icon" onClick={this.props.sidebarToggle}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="header-logo" onClick={this.linkToHome}>Noted</div>
        </div>
        <div className="header-search-container">
        </div>
        <div className="header-bar-right">
          <div className="header-add-note">
            <div className="header-add-note-icon">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="header-add-note-text" onClick={this.linkToNewNote}>
              Add Note</div>
          </div>
          <div className="header-admin">
            <div className="header-profile-icon">
              <div className="label">{this.props.currentUser.username}</div>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="header-logout-icon" onClick={this.props.logout}>
              <div className="label">Logout</div>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HeaderBar);
