import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {searchParams: "", atRoute: false};
    this.update = this.update.bind(this);
    this.reset = this.reset.bind(this);
    this.setSearchParams = this.setSearchParams.bind(this);
    this.redirectToSearch = this.redirectToSearch.bind(this);
  }

  componentWillReceiveProps () {
    if (!this.props.router.isActive('/search')) {
      this.setState({atRoute: false, searchParams: ""});
    }
  }

  update (e) {
    this.setState({searchParams: e.currentTarget.value}, () => {
      if (this.state.searchParams.length > 0) {
        this.props.router.push(`/search?${this.state.searchParams}`);
      } else {
        this.props.router.push('/search');
      }
    });
  }

  reset (e) {
    this.setState({searchParams: "", atRoute: false}, () => (
      this.props.router.push('home')
    ));
  }

  setSearchParams (e) {
    e.preventDefault();
    this.props.router.push(`/search?${this.state.searchParams}`);
  }

  redirectToSearch () {
    if (this.state.atRoute === false) {
      this.setState({atRoute: true}, () =>
        this.props.router.push('/search'));
    }
  }

  render () {
    return (
      <div className={`search-bar-container-${this.state.atRoute}`}
        onClick={this.redirectToSearch}>
        <div className="search-icon">
          <i className="fa fa-search" aria-hidden="true" /></div>
        <form onSubmit={this.setSearchParams}>
          <input className="search-bar" type='text'
            value={this.state.searchParams} onChange={this.update}
            placeholder="Search" />
        </form>
        <div className={`search-cancel-icon-${this.state.atRoute}`}
          onClick={this.reset}>
          <i className="fa fa-times" aria-hidden="true" /></div>
      </div>
    );
  }
}

export default withRouter(Search);
