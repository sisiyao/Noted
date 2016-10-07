import React from 'react';
import { withRouter } from 'react-router';
import bindAll from 'lodash.bindall';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {searchParams: "", atRoute: this.props.atRoute};
    bindAll(this, ['update', 'reset', 'setSearchParams', 'redirectToSearch',
      'searchInputField', 'searchIcon', 'searchCancelIcon']);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({atRoute: nextProps.atRoute, searchParams: ""});
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
    e.preventDefault();
    this.props.router.push('home');
  }

  setSearchParams (e) {
    e.preventDefault();
    this.props.router.push(`/search?${this.state.searchParams}`);
  }

  redirectToSearch (e) {
    e.preventDefault();
    if (this.state.atRoute === false) {
        this.props.router.push('/search');
    }
  }

  searchInputField () {
    return (
      <form onSubmit={this.setSearchParams}>
        <input className="search-bar" type='text'
          value={this.state.searchParams} onChange={this.update}
          placeholder="Search" />
      </form>
    );
  }

  searchIcon () {
    return (
      <div className="search-icon">
        <i className="fa fa-search" aria-hidden="true" /></div>
    );
  }

  searchCancelIcon () {
    return (
      <div className={`search-cancel-icon-${this.state.atRoute}`}
        onClick={this.reset}>
        <i className="fa fa-times" aria-hidden="true" />
      </div>
    );
  }

  render () {
    return (
      <div className={`search-bar-container-${this.state.atRoute}`}
        onClick={this.redirectToSearch}>
        {this.searchIcon()}
        {this.searchInputField()}
        {this.searchCancelIcon()}
      </div>
    );
  }
}

export default withRouter(Search);
