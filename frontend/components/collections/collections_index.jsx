import React from 'react';
import CollectionsIndexItem from './collections_index_item';
import SidebarItem from '../structural/sidebar_item';
import CollectionFormContainer from './collection_form_container';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllCollections();
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  render () {
    const collections = this.props.collections.map(collection => (
      <CollectionsIndexItem collection={collection}
        key={`${collection.id}${collection.name}`}
        destroyCollection={this.props.destroyCollection}/>
    ));

    return (
      <div className="sidebar-collections">
        <div className="collection-header">Collections</div>
        {collections}
        <div onClick={this.openModal}>
          <SidebarItem item="Create new collection" icon="fa fa-plus" />
        </div>
        <CollectionFormContainer modalOpen={this.state.modalOpen}
          closeModal={this.closeModal} collection={{name: "", id: ""}}
          type="create" />
      </div>
    );
  }
}

export default CollectionsIndex;
