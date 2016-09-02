import React from 'react';
import Modal from 'react-modal';

class CollectionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.collection.name,
      id: this.props.collection.id
    };
  }

  update (field) {
		return e => this.setState(
      { [field]: e.currentTarget.value }
    );
	}

  _handleSubmit (collection) {
    return (e) => {
      e.preventDefault();
      this.props.processForm(collection);
      this.props.closeModal();
    };
  }

  render () {
    let formText = (this.props.type === "edit") ? "Update" : "Create";

    return (
      <Modal
        isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}>

        <div className="collection-form-modal">
          <div className="close-form-icon" onClick={this.props.closeModal}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>

          <div className="form-title">
            {formText} collection
          </div>

          <form className="collection-form"
            onSubmit={this._handleSubmit(this.state)}>
            <input type='text' value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"/>
            <input type='submit' value={formText} />
          </form>
        </div>
      </Modal>
    );
  }
}

export default CollectionForm;
