import React from 'react';
import CollectionsIndexItem from './collections_index_item';
import SidebarItem from '../structural/sidebar_item';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import modalStyle from './collection_modal_style';
import bindAll from 'lodash.bindall';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {modalOpen: false, collectionToDelete: null};

    bindAll(this, ['listCollections', 'newCollectionLink', 'newCollection',
      'openModal', 'closeModal', 'deleteCollection', 'modalContent']);
  }

  componentDidMount () {
    this.props.fetchAllCollections();
  }

  setCollectionToDelete (collectionId) {
    this.setState({collectionToDelete: collectionId});
    this.openModal();
  }

  deleteCollection () {
    this.props.destroyCollection(this.state.collectionToDelete);
    this.closeModal();
  }

  listCollections () {
    return this.props.collections.map(collection => (
      <CollectionsIndexItem collection={collection}
        key={`${collection.id}${collection.name}`}
        delete={this.setCollectionToDelete.bind(this, collection.id)} />
    ));
  }

  newCollectionLink () {
    this.props.router.push('/new-collection');
  }

  newCollection () {
    return (
      <div>
        <SidebarItem item="Create new collection" icon="fa fa-plus"
          link={this.newCollectionLink}/>
      </div>
    );
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  modalContent () {
    return (
      <div className='modal-body'>
        <div>We’ll delete this label and remove it from all of your
          notes. Your notes won’t be deleted.</div>
        <div className='modal-buttons'>
          <div className='modal-cancel'
            onClick={this.closeModal}>Cancel</div>
          <div className='modal-delete'
            onClick={this.deleteCollection}>Delete</div>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="sidebar-collections">
        <div className="collection-header">Collections</div>
        {this.listCollections()}
        {this.newCollection()}
        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal} style={modalStyle}>
            {this.modalContent()}
        </Modal>
      </div>
    );
  }
}

export default withRouter(CollectionsIndex);
