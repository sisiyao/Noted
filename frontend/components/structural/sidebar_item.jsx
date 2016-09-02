import React from 'react';

const SidebarItem = ({item, icon}) => {
  return (
    <div className="sidebar-item">
      <div className="sidebar-item-icon">
        <i className={icon} aria-hidden="true"></i>
      </div>
      <div className="sidebar-item-text">
        {item}
      </div>
    </div>
  );
};

export default SidebarItem;
