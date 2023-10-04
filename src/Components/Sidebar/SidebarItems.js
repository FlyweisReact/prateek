import React, { useState } from "react";
import "./sidebaritems.css";
import { Link } from "react-router-dom";

const SidebarItems = ({ item }) => {
  const [open, setOpen] = useState(false);

  if(item.childrens){
      return (
          <div className={open ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title">
                  <span>
                      { item.icon && <i className={item.icon}></i> }
                      {item.title}
                  </span>
                  <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
              </div>
              <div className="sidebar-content">
                  <SidebarItems key={index} item={child} />
              </div>
          </div>
      )
  }else{
      return (
          <div className="sidebar-item plain">
              { item.icon && <i className={item.icon}></i> }
              {item.title}
          </div>
      )
  }
};

export default SidebarItems;
