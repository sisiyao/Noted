import React from 'react';
import HeaderBarContainer from './header_bar/header_bar_container';
import CollectionsIndexContainer from './collections/collections_index_container';

const Home = () => {
  return (
    <div>
      <HeaderBarContainer />
      <CollectionsIndexContainer />
    </div>
  );
};

export default Home;
