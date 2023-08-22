import React from "react";
import { Header } from "rsuite";
import "./OrderPage.css"
import Side from "./Side";
import MainPageHeader from "./MainPageHeader";
import Order from "./Order";
import MainPageSearch from "./MainPageSearch";
function OrderPage() {
  return (
    <div>
      <Header />
      <MainPageSearch />
      <MainPageHeader />
      <div className="orderpage">
        <div className="orderpage-side">
          <Side />
        </div>
        <div className="orderpage-main">
          <Order />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
