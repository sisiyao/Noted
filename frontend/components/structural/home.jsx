import React from 'react';
import HeaderBarContainer from '../header_bar/header_bar_container';
import SidebarContainer from './sidebar_container';

const Home = () => {
  return (
    <div className="home">
      <HeaderBarContainer />
      <div className="body">
        <SidebarContainer />
        <div className="dashboard">Dashboard</div>
      </div>
    </div>
  );
};

export default Home;
