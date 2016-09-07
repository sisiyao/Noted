import React from 'react';
import CollectionsIndexItem from './collections_index_item';
import SidebarItem from '../structural/sidebar_item';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import modalStyle from './collection_modal_style';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {modalOpen: false};

    this.listCollections = this.listCollections.bind(this);
    this.newNote = this.newNote.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllCollections();
  }

  listCollections () {
    return this.props.collections.map(collection => (
      <CollectionsIndexItem collection={collection}
        key={`${collection.id}${collection.name}`}
        destroyCollection={this.props.destroyCollection} />
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

        <div onClick={this.openModal}>
          <SidebarItem item="Create new collection" icon="fa fa-plus" />
        </div>

        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal} style={modalStyle}>

            <div>We’ll delete this label and remove it from all of your
              notes. Your notes won’t be deleted.</div>

            <button>Cancel</button>
            <button>Delete</button>

        </Modal>
      </div>
    );
  }
}

export default withRouter(CollectionsIndex);
