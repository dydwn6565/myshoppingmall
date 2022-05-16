import React from "react";
import "./SidebarItems.css";
import OnlyHear from "./sidebarItems/OnlyHear";

function SidebarItems() {
  return (
    <div className="sidebar_items">
      <div className="sidebar_items_header">
        <span>ranking</span>
        <span>update</span>
        <span>sale</span>
        <span>only here</span>
      </div>
      <div className="sidebar_items_body">
        <OnlyHear />
      </div>
    </div>
  );
}

export default SidebarItems;
