import React from 'react';
import { withRouter } from 'react-router';

const CollectionsIndexItem = ({collection, destroyCollection, router}) => {
  return (
    <div className="sidebar-collection-item">
      <div className="sidebar-item-icon">
        <i className="fa fa-folder" aria-hidden="true"></i>
      </div>
      <div className="sidebar-item-text">
        {collection.name}
      </div>
      <div className="collection-item-options"
        onClick={()=> router.push("/edit-collection")}>
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>
      <div className="collection-item-options"
        onClick={destroyCollection.bind(null, collection.id)}>
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default withRouter(CollectionsIndexItem);
