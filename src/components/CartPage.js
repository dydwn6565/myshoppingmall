import React from "react";
import Cart from "./Cart";
import HeadAd from "./HeadAd";

import MainPageHeader from "./MainPageHeader";
import MainPageSearch from "./MainPageSearch";
import Side from "./Side";
function CartPage() {
  return (
    <div>
      <HeadAd />
      <MainPageSearch />
      <MainPageHeader />
      <Cart />
      <Side />
    </div>
  );
}

export default CartPage;
