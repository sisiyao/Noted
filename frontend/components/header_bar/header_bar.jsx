import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import SearchContainer from '../search/search_container';
import ProfileModal from './profile_modal';
import bindAll from 'lodash.bindall';

class HeaderBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {modalOpen: false};
    bindAll(this, ['linkToHome', 'linkToNewNote', 'openModal', 'closeModal',
      'headerBarLeft', 'headerAddNote', 'headerProfile', 'headerLogout',
      'headerBarRight']);
  }

  shouldComponentUpdate (nextProps) {
    this.redirectIfLoggedOut(nextProps.loggedIn);
    return nextProps.loggedIn === this.props.loggedIn;
  }

  redirectIfLoggedOut (loggedIn) {
    if (!loggedIn) {
			this.props.router.push("/");
		}
  }

  linkToHome () {
    this.props.router.push("/home");
  }

  linkToNewNote () {
    this.props.router.push("/new-note");
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  headerBarLeft () {
    return (
      <div className="header-bar-left">
        <div className="header-menu-icon" onClick={this.props.sidebarToggle}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="header-logo" onClick={this.linkToHome}>Noted</div>
      </div>
    );
  }

  headerAddNote () {
    return (
      <div className="header-add-note" onClick={this.linkToNewNote}>
        <div className="header-add-note-icon">
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <div className="header-add-note-text">Add Note</div>
      </div>
    );
  }

  headerProfile () {
    return (
      <div className="header-profile-icon" onClick={this.openModal}>
        <div className="label">Profile</div>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    );
  }

  headerLogout () {
    return (
      <div className="header-logout-icon" onClick={this.props.logout}>
        <div className="label">Logout</div>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </div>
    );
  }

  headerBarRight () {
    return (
      <div className="header-bar-right">
        {this.headerAddNote()}
        <div className="header-admin">
          {this.headerProfile()}
          {this.headerLogout()}
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="header-bar">
        {this.headerBarLeft()}
        <SearchContainer />
        {this.headerBarRight()}
        <ProfileModal currentUser={this.props.currentUser}
          modalOpen={this.state.modalOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default withRouter(HeaderBar);
