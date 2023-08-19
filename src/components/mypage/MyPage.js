import React from "react";
import HeadAd from "../HeadAd";

import MyPageHeader from "./MyPageHeader";
import MyPageSide from "./MyPageSide";
import MainPageHeader from "../MainPageHeader";
import "./MyPage.css";
import MyPageMain from "./MyPageMain";
import MainPageSearch from "../MainPageSearch";
function MyPage() {
  return (
    <div className="mypage">
      {/* <HeadAd /> */}
      <MainPageSearch />

      <MainPageHeader />
      <MyPageHeader />

      <div className="mypage-container">
        <MyPageSide />

        <MyPageMain />
      </div>
    </div>
  );
}

export default MyPage;
