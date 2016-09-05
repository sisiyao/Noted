import React from 'react';
import CollectionsIndexItem from './collections_index_item';
import SidebarItem from '../structural/sidebar_item';
import { withRouter } from 'react-router';

class CollectionsIndex extends React.Component {
  constructor (props) {
    super(props);
    this.listCollections = this.listCollections.bind(this);
    this.newNote = this.newNote.bind(this);
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

  render () {
    return (
      <div className="sidebar-collections">
        <div className="collection-header">Collections</div>
        {this.listCollections()}
        <div>
          <SidebarItem item="Create new collection" icon="fa fa-plus"
            link={this.newNote}/></div>
      </div>
    );
  }
}

export default withRouter(CollectionsIndex);
