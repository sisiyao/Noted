import React from 'react';
import { withRouter } from 'react-router';

class CollectionsIndexItem extends React.Component {
  constructor (props) {
    super(props);
    this.linkToEditNote = this.linkToEditNote.bind(this);
  }

  linkToEditNote (collectionId) {
    return () => this.props.router.push(`/collection/${collectionId}`);
  }

  render () {
    return (
      <div className="sidebar-collection-item">
        <div className="sidebar-item-icon">
          <i className="fa fa-folder" aria-hidden="true" />
        </div>
        <div className="sidebar-item-text">
          {this.props.collection.name}
        </div>
        <div className="collection-item-options">
          <i className="fa fa-pencil" aria-hidden="true"
            onClick={this.linkToEditNote(this.props.collection.id)} />
        </div>
        <div className="collection-item-options"
          onClick={this.props.destroyCollection.bind(null, this.props.collection.id)}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default withRouter(CollectionsIndexItem);
