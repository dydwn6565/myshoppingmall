import React from "react";
import CompanyContact from "./sidebarsearch/CompanyContact";

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

      <CompanyContact />
    </div>
  );
}

export default Side;
