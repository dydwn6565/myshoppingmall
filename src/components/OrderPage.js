import React from "react";
import { Header } from "rsuite";
import HeadAd from "./HeadAd";
import Side from "./Side";
import MainPageHeader from "./MainPageHeader";
import Order from "./Order";
import MainPageSearch from "./MainPageSearch";
function OrderPage() {
  return (
    <div className="orderpage">
      <HeadAd />
      <Header />
      <MainPageSearch />
      <MainPageHeader />
      <Order />
      <Side />
    </div>
  );
}

export default OrderPage;
