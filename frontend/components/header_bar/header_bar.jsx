import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import SearchContainer from '../search/search_container';
import ProfileModal from './profile_modal';

class HeaderBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {modalOpen: false};
    this.linkToHome = this.linkToHome.bind(this);
    this.linkToNewNote = this.linkToNewNote.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render () {
    return (
      <div className="header-bar">
        <div className="header-bar-left">
          <div className="header-menu-icon" onClick={this.props.sidebarToggle}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="header-logo" onClick={this.linkToHome}>Noted</div>
        </div>

        <SearchContainer />

        <div className="header-bar-right">
          <div className="header-add-note" onClick={this.linkToNewNote}>
            <div className="header-add-note-icon">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="header-add-note-text">Add Note</div>
          </div>
          <div className="header-admin">
            <div className="header-profile-icon" onClick={this.openModal}>
              <div className="label">Profile</div>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="header-logout-icon" onClick={this.props.logout}>
              <div className="label">Logout</div>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <ProfileModal currentUser={this.props.currentUser}
          modalOpen={this.state.modalOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default withRouter(HeaderBar);
