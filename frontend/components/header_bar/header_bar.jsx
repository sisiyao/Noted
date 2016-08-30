import React from 'react';
import { withRouter } from 'react-router';

class HeaderBar extends React.Component {
  constructor (props) {
    super(props);
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

  render () {
    return (
      <div>
        Logged in as {this.props.currentUser.username}
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(HeaderBar);
