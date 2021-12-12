import React, { useContext } from "react";
import CompanyContact from "./sidebarsearch/CompanyContact";
import SidebarItems from "./sidebarsearch/SidebarItems";
import SidebarSearch from "./sidebarsearch/SidebarSearch";
import "./Side.css";
import { ItemContext } from "../Context";
function Side() {
  const { item, setItem } = useContext(ItemContext);
  return (
    <div className="side">
      {console.log(item)}
      <SidebarSearch
        itemBigTitle={"Outer"}
        itemSmallTitle={["hoody", "cardigan"]}
      />
      <SidebarSearch
        itemBigTitle={"Pants"}
        itemSmallTitle={["denim pants", "slacks"]}
      />

      <SidebarItems />
      <CompanyContact />
    </div>
  );
}

export default Side;
