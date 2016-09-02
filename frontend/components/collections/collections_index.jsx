import React from 'react';
import CollectionsIndexItem from './collections_index_item';
import SidebarItem from '../structural/sidebar_item';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllCollections();
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
        <SidebarItem item="Create new collection" icon="fa fa-plus" />
      </div>
    );
  }
}

export default CollectionsIndex;
