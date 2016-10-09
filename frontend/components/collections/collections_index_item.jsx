import React from 'react';
import { withRouter, Link } from 'react-router';
import bindAll from 'lodash.bindall';

class CollectionsIndexItem extends React.Component {
  constructor (props) {
    super(props);
    bindAll(this, ['linkToEditNote', 'collectionFolderIcon', 'collectionName',
      'collectionEditAction', 'collectionDeleteAction']);
  }

  linkToEditNote (collectionId) {
    return () => this.props.router.push(`/collection/${collectionId}`);
  }

  collectionFolderIcon () {
    return (
      <div className="sidebar-item-icon">
        <i className="fa fa-folder" aria-hidden="true" />
      </div>
    );
  }

  collectionName () {
    return (
      <div className="sidebar-item-text">
        {this.props.collection.name}
      </div>
    );
  }

  collectionEditAction () {
    return (
      <div className="collection-item-options">
        <i className="fa fa-pencil" aria-hidden="true"
          onClick={this.linkToEditNote(this.props.collection.id)} />
      </div>
    );
  }

  collectionDeleteAction () {
    return (
      <div className="collection-item-options"
        onClick={this.props.delete()}>
        <i className="fa fa-trash-o" aria-hidden="true" />
      </div>
    );
  }

  render () {
    return (
      <div className="sidebar-collection-item">
        <Link to={`/notes/${this.props.collection.name}`}
          className="select-collection-link">
          {this.collectionFolderIcon()}
          {this.collectionName()}
        </Link>
        {this.collectionEditAction()}
        {this.collectionDeleteAction()}
      </div>
    );
  }
}

export default withRouter(CollectionsIndexItem);
