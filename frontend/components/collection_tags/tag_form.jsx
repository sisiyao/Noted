import React from 'react';
import Modal from 'react-modal';
import modalStyle from './tag_modal_style';

class TagForm extends React.Component {
  constructor (props) {
    super(props);
  }

  checkboxes () {
    return this.props.collections.map(collection => {
      return (
        <div className="checkbox" key={`${collection.id}${collection.name}`}>
          <label className="checkbox-label">
            <input type="checkbox" value="collection.name"
              checked={this.props.collectionIds.includes(collection.id)}
              onChange={this.props.updateCheckbox(collection.id)}
              name="note[collection_ids][]" />
            {collection.name}
          </label>
        </div>
      );
    });
  }

  render () {
    return (
      <Modal isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal} style={modalStyle}>
        <div className="tag-form" onClick={this.props.showDropdown}>
          <div className="tag-form-label"><span>EDIT COLLECTIONS</span></div>
          <div className={"tag-form-checkboxes"}>
            {this.checkboxes()}</div>
        </div>
      </Modal>
    );
  }
}

export default TagForm;
