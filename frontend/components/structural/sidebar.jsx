import React from 'react';
import CollectionsIndexContainer from '../collections/collections_index_container.js';
import SidebarItem from './sidebar_item.jsx';
import { withRouter } from 'react-router';

const Sidebar = ({sidebar, router}) => {
  const linkToHome = () => router.push("/home");
  const sidebarShow = sidebar ? "sidebar-show" : "sidebar-hide";
  const sidebarFlex = sidebar ? "sidebar-width1" : "sidebar-width0";

  return (
    <div className={sidebarFlex}>
      <div className={sidebarShow}>
        <div className="sidebar-top">
          <SidebarItem item='Notes' icon='fa fa-home' link={linkToHome} />
        </div>
        <CollectionsIndexContainer />
        <div className="sidebar-bottom">
          <a className="sidebar-about" href="https://www.linkedin.com/in/sisiyao" target="_blank">
            <SidebarItem item='Contact the developer' icon='fa fa-info-circle' />
          </a>
        </div>
        <div className="sidebar-space"></div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
