import React from 'react';
import HeaderBarContainer from '../header_bar/header_bar_container';
import SidebarContainer from './sidebar_container';


const Home = ({children}) => {
  return (
    <div className="home">
      <HeaderBarContainer />
      <div className="header-dummy"></div>
      <div className="body">
        <SidebarContainer />
        <div className="dashboard">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Home;
