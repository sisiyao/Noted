import React from 'react';
import CollectionsIndexContainer from '../collections/collections_index_container.js';
import SidebarItem from './sidebar_item.jsx';

const Sidebar = ({sidebar}) => {
  if (sidebar) {
    return (
      <div className="sidebar-show">
        <div className="sidebar-top">
          <SidebarItem item='Notes' icon='fa fa-home' />
        </div>
        <CollectionsIndexContainer />
        <div className="sidebar-bottom">
          <SidebarItem item='About' icon='fa fa-info-circle' />
        </div>
        <div className="sidebar-space"></div>
      </div>
    );
  } else {
    return <div className="sidebar-hide"></div>;
  }
};

export default Sidebar;
