import React from "react";
import HeadAd from "../HeadAd";
import MainPageHeader from "../MainPageHeader";
import "./MyPage.css";
function MyPage() {
  return (
    <div className="mypage">
      <HeadAd />
      <MainPageHeader />
      {/* <MyPageHeader /> */}
    </div>
  );
}

export default MyPage;
