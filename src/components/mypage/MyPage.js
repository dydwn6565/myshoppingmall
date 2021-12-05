import React from "react";
import HeadAd from "../HeadAd";
import Header from "../Header";
import MyPageHeader from "./MyPageHeader";
import MyPageSide from "./MyPageSide";
import MainPageHeader from "../MainPageHeader";
import "./MyPage.css";
import MyPageMain from "./MyPageMain";

function MyPage() {
  return (
    <div className="mypage">
      <HeadAd />
      <Header />
      <MainPageHeader />
      <MyPageHeader />

      <MyPageSide />

      <MyPageMain />
    </div>
  );
}

export default MyPage;
