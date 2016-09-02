import React from 'react';
import Modal from 'react-modal';

class CollectionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.collection.name,
      id: this.props.collection.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.closeModal();
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
            onSubmit={this.handleSubmit}>
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
