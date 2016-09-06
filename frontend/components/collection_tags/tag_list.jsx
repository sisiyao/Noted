import React from 'react';
import collectionNameSelector from '../../util/collection_name_selector';

const TagList = ({collections, collectionIds}) => {
  const collectionNames = collectionNameSelector(collections, collectionIds);
  const tags = collectionNames.map(name => {
    return <div key={`tag-list-${name}`} className="individual-tag">{name}</div>;
  });

  return (
    <div className="tag-list">{tags}</div>
  );
};

export default TagList;
