import React from 'react';

const CollectionsIndexItem = ({collection}) => {
  return (
    <div className="sidebar-collection-item">
      <div className="sidebar-item-icon">
        <i className="fa fa-folder-open" aria-hidden="true"></i>
      </div>
      <div className="sidebar-item-text">
        {collection.name}
      </div>
      <div className="collection-item-options">
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>
      <div className="collection-item-options">
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default CollectionsIndexItem;
