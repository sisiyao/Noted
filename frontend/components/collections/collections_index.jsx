import React from 'react';
import CollectionsIndexItem from './collections_index_item';

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
        key={`${collection.id}${collection.name}`}/>
    ));
    return (
      <div className="sidebar-collections">{collections}</div>
    );
  }
}

export default CollectionsIndex;
