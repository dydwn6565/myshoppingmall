import React from "react";
import CompanyContact from "./sidebarsearch/CompanyContact";
import SidebarItems from "./sidebarsearch/SidebarItems";
import SidebarSearch from "./sidebarsearch/SidebarSearch";
import "./Side.css";

function Side() {
  return (
    <div className="side">
      <SidebarSearch
        itemBigTitle={"outer"}
        itemSmallTitle={["hoody", "cardigan"]}
      />
      <SidebarSearch
        itemBigTitle={"pants"}
        itemSmallTitle={["denim pants", "slacks"]}
      />

      <SidebarItems />
      <CompanyContact />
    </div>
  );
}

export default Side;
