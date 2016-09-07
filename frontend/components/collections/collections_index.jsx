import React from 'react';
import CollectionsIndexItem from './collections_index_item';
import SidebarItem from '../structural/sidebar_item';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import modalStyle from './collection_modal_style';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {modalOpen: false, collectionToDelete: null};

    this.listCollections = this.listCollections.bind(this);
    this.newNote = this.newNote.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCollection = this.deleteCollection.bind(this);
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

  newNote () {
    this.props.router.push('/new-collection');
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  render () {
    return (
      <div className="sidebar-collections">
        <div className="collection-header">Collections</div>
        {this.listCollections()}
        <div>
          <SidebarItem item="Create new collection" icon="fa fa-plus"
            link={this.newNote}/>
        </div>

        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal} style={modalStyle}>
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
        </Modal>
      </div>
    );
  }
}

export default withRouter(CollectionsIndex);
