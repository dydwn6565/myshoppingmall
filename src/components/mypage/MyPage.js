import React from "react";
import HeadAd from "../HeadAd";
import Header from "../Header";
import MyPageHeader from "./MyPageHeader";
import MainPageHeader from "../MainPageHeader";
import "./MyPage.css";
function MyPage() {
  return (
    <div className="mypage">
      <HeadAd />
      <Header />
      <MainPageHeader />
      <MyPageHeader />
    </div>
  );
}

export default MyPage;
