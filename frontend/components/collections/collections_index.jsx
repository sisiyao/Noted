import React from 'react';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllCollections(this.props.currentUser.id);
  }

  render () {
    const collections = this.props.collections.map(collection => (
      <div>{collection.name}</div>
    ));
    return (
      <div className="collections-list">{collections}</div>
    );
  }
}

export default CollectionsIndex;
