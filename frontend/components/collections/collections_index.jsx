import React from 'react';
import CollectionsIndexItem from './collections_index_item';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllCollections(this.props.currentUser.id);
  }

  render () {
    const collections = this.props.collections.map(collection => (
      <CollectionsIndexItem collection={collection} />
    ));
    return (
      <div className="sidebar-collections">{collections}</div>
    );
  }
}

export default CollectionsIndex;
