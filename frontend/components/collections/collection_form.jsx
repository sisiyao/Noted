import React from 'react';
import Modal from 'react-modal';
import style from './collection_modal_style';
import { withRouter } from 'react-router';

class CollectionForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { id: "", name: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formText = this.formText.bind(this);
    this.cancel = this.cancel.bind(this);
    this.errors = this.errors.bind(this);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-collection') {
      this.props.fetchSingleCollection(this.props.location.pathname.slice(12));
    }
  }

  componentWillReceiveProps (nextProps) {
    if ((this.props.location.pathname !== nextProps.location.pathname)
    && (nextProps.route.path !== '/new-collection')) {
      this.props.fetchSingleCollection(nextProps.location.pathname.slice(12));
    } else if (nextProps.route.path === '/new-collection') {
      this.setState({ id: '', name: '' });
    } else if (nextProps.formStatus === 'found') {
      const collectionId = nextProps.location.pathname.slice(12);
      const collection = nextProps.collections[collectionId];
      this.setState({ id: collection.id, name: collection.name });
    }
  }

  update (field) {
		return e => this.setState(
      { [field]: e.currentTarget.value }
    );
	}

  formText () {
    return (this.props.formType === "new-collection") ? "Create" : "Rename";
  }

  handleSubmit (e) {
    e.preventDefault();
    const collection = this.state;
    this.props.processForm(collection);
  }

  cancel () {
    this.props.router.push('/home');
  }

  errors () {
    return this.props.errors.map((error, idx) => (
      <li key={`${idx}${error}`}>{error}</li>
    ));
  }

  submitButtonStyle () {
    if (this.state.name === "") {
      return "submit-collection-form-disabled";
    } else {
      return "submit-collection-form-enabled";
    }
  }

  submitButtonStatus () {
    if (this.state.name === "") {
      return true;
    } else {
      return false;
    }
  }

  render () {
    return (
      <div className="collection-form-container">
        <div className="collection-form-icon">
          <i className="fa fa-folder-open-o" aria-hidden="true"></i></div>
        <div className="collection-form-title">{this.formText()} collection</div>

        <div>
          <form className="collection-form" onSubmit={this.handleSubmit}>
            <input className="collection-form-input" type='text' value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"/>
            <ul className="collection-form-errors">{this.errors()}</ul>
            <input className={this.submitButtonStyle()} type='submit'
              value={this.formText()} disabled={this.submitButtonStatus()}/>
          </form>
        </div>

        <div className="close-collection-form" onClick={this.cancel}>Cancel</div>
      </div>
    );
  }
}

export default withRouter(CollectionForm);
