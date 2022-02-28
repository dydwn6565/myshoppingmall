import React from "react";
import { Header } from "rsuite";
import HeadAd from "./HeadAd";
import Side from "./Side";
import MainPageHeader from "./MainPageHeader";
import Order from "./Order";
function OrderPage() {
  return (
    <div className="orderpage">
      <h1>OrderPagepage</h1>
      <HeadAd />
      <Header />
      <MainPageHeader />
      <Order />
      <Side />
    </div>
  );
}

export default OrderPage;
