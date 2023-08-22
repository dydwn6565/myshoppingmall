import React from "react";
import Cart from "./Cart";
import HeadAd from "./HeadAd";
import "./CartPage.css"
import MainPageHeader from "./MainPageHeader";
import MainPageSearch from "./MainPageSearch";
import Side from "./Side";
function CartPage() {
  return (
    <div>
      {/* <HeadAd /> */}
      <MainPageSearch />
      <MainPageHeader />
      <div className="cart-page">
        <div className="cart-page-side">
          <Side />
        </div>
        <div className="cart-page-main">
          <Cart />
        </div >
      </div>
    </div>
  );
}

export default CartPage;
