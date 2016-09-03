import React from 'react';
import Modal from 'react-modal';
import style from './collection_modal_style';

class CollectionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.collection.name,
      id: this.props.collection.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  update (field) {
		return e => this.setState(
      { [field]: e.currentTarget.value }
    );
	}

  handleSubmit (e) {
    e.preventDefault();
    const collection = this.state;
    this.props.formAction(collection);
    // this.resetState();
  }

  closeModal () {
    this.props.clearErrors();
    this.resetState();
  }

  resetState () {
    if (this.props.type === 'create') {
      this.setState({name: "", id: null});
    } else {
      this.setState(
        {name: this.props.collection.name, id: this.props.collection.id}
      );
    }
  }

  render () {
    const formText = (this.props.type === "edit") ? "Update" : "Create";
    const errors = this.props.errors.map((error, idx) => (
      <li key={`${idx}${error}`}>{error}</li>
    ));

    return (
      <Modal isOpen={this.props.modalOpen} onRequestClose={this.closeModal}
        style={style}>

        <div className="collection-form-modal">
          <div className="create-collection-icon">
            <i className="fa fa-folder-open-o" aria-hidden="true"></i></div>
            <div className="form-title">{formText} collection</div>

          <form className="collection-form"
            onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"/>
            <input type='submit' value={formText} />
          </form>

          <ul className="collection-form-errors">{errors}</ul>
          <div className="close-collection-form" onClick={this.closeModal}>
            Cancel</div>
        </div>
      </Modal>
    );
  }
}

export default CollectionForm;
