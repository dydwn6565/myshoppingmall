import React from "react";
import CompanyContact from "./sidebarsearch/CompanyContact";
import SidebarItems from "./sidebarsearch/SidebarItems";
import SidebarSearch from "./sidebarsearch/SidebarSearch";
import "./Side.css";
function Side() {
  return (
    <div className="side">
      <SidebarSearch />
      <SidebarItems />
      <CompanyContact />
    </div>
  );
}

export default Side;
