import React from "react";
import "./SidebarItems.css";
import OnlyHear from "./sidebarItems/OnlyHear";
import Ranking from "./sidebarItems/Ranking";
import Sale from "./sidebarItems/Sale";
import Update from "./sidebarItems/Update";
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
        {/* <Ranking /> */}
        {/* <Update /> */}
        {/* <Sale /> */}
        <OnlyHear />
      </div>
    </div>
  );
}

export default SidebarItems;
