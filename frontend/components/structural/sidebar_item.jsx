import React from 'react';

const SidebarItem = ({item, icon, link}) => {
  return (
    <div className="sidebar-item" onClick={link}>
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
