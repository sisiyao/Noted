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
    this.errors = this.errors.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-collection') {
      this.props.fetchSingleCollection(this.props.location.pathname.slice(12));
    }
  }

  componentWillReceiveProps (nextProps) {
    let collectionId;
    if (this.props.formType !== 'new-collection') {
      collectionId = nextProps.location.pathname.slice(12);
    }

    if (nextProps.formType === 'new-collection') {
      this.setState({ id: '', name: '' });
    } else if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchSingleCollection(nextProps.location.pathname.slice(12));
    } else if (nextProps.formStatus === 'found') {
      const collection = nextProps.collections[collectionId];
      this.setState({ id: collection.id, name: collection.name });
    } else if (nextProps.formStatus === 'created' ||
      nextProps.formStatus === 'updated') {
      this.props.router.push('/home');
    }
  }

  update (field) {
		return e => this.setState(
      { [field]: e.currentTarget.value }
    );
	}

  formText () {
    return (this.props.formType === "new-collection") ? "Create" : "Update";
  }

  errors () {
    return this.props.errors.map((error, idx) => (
      <li key={`${idx}${error}`}>{error}</li>
    ));
  }

  handleSubmit (e) {
    e.preventDefault();
    const collection = this.state;
    this.props.processForm(collection);
  }

  cancel () {
    this.props.router.push('/home');
  }

  render () {
    return (
      <div className="collection-form">
        <div className="create-collection-icon">
          <i className="fa fa-folder-open-o" aria-hidden="true"></i></div>
          <div className="form-title">{this.formText()} collection</div>

        <form className="collection-form" onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name}
            onChange={this.update("name")}
            placeholder="Name"/>
          <ul className="collection-form-errors">{this.errors()}</ul>
          <input type='submit' value={this.formText()} />
        </form>

        <div className="close-collection-form" onClick={this.cancel}>Cancel</div>
      </div>
    );
  }
}

export default withRouter(CollectionForm);
