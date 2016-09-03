import React from 'react';
import CollectionsIndexItem from './collections_index_item';
import SidebarItem from '../structural/sidebar_item';
import CollectionFormContainer from './collection_form_container';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllCollections();
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errors.length === 0) {
      this.setState({ modalOpen: false });
    }
  }

  render () {
    const collections = this.props.collections.map(collection => (
      <CollectionsIndexItem collection={collection}
        key={`${collection.id}${collection.name}`}
        destroyCollection={this.props.destroyCollection}
        openModal={this.openModal} modalOpen={this.state.modalOpen}
        errors={this.props.errors} />
    ));

    return (
      <div className="sidebar-collections">
        <div className="collection-header">Collections</div>
        {collections}
        <div onClick={this.openModal}>
          <SidebarItem item="Create new collection" icon="fa fa-plus" /></div>
        <CollectionFormContainer modalOpen={this.state.modalOpen}
          collection={{name: "", id: null}} type="create" />
      </div>
    );
  }
}

export default CollectionsIndex;
