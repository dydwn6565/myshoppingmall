import React from "react";
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
        <div className="mypage-left">
          <MyPageSide />
        </div>
        <div className="mypage-right">
          <MyPageMain />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
