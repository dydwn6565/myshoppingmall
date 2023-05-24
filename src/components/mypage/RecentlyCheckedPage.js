import React from "react";
import HeadAd from "../HeadAd";

import MyPageHeader from "./MyPageHeader";
import MainPageHeader from "../MainPageHeader";
import "./RecentlyCheckedPage.css";
import MyPageSide from "./MyPageSide";
import RecentlyChecked from "./RecentlyChecked";
import MainPageSearch from "../MainPageSearch";
function RecentlyCheckedPage() {
  return (
    <div className="recentlycheckedpage">
      {/* <HeadAd /> */}
      <MainPageSearch />

      <MainPageHeader />
      <MyPageHeader />
      <MyPageSide />
      <RecentlyChecked />
    </div>
  );
}

export default RecentlyCheckedPage;
