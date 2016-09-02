import React from 'react';
import { withRouter } from 'react-router';
import CollectionFormContainer from './collection_form_container';

// ({collection, destroyCollection, router})

class CollectionsIndexItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  render () {
    return (
      <div className="sidebar-collection-item">
        <div className="sidebar-item-icon">
          <i className="fa fa-folder" aria-hidden="true"></i>
        </div>
        <div className="sidebar-item-text">
          {this.props.collection.name}
        </div>
        <div className="collection-item-options"
          onClick={this.openModal}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div className="collection-item-options"
          onClick={this.props.destroyCollection.bind(null, this.props.collection.id)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </div>

        <CollectionFormContainer modalOpen={this.state.modalOpen}
          closeModal={this.closeModal} collection={this.props.collection}
          type="edit" />
      </div>
    );
  }
}

export default withRouter(CollectionsIndexItem);
