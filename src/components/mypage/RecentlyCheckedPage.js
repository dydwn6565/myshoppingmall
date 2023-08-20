import React from "react";
import MyPageHeader from "./MyPageHeader";
import MainPageHeader from "../MainPageHeader";
import "./RecentlyCheckedPage.css";
import MyPageSide from "./MyPageSide";
import RecentlyChecked from "./RecentlyChecked";
import MainPageSearch from "../MainPageSearch";
function RecentlyCheckedPage() {
  return (
    <div>
      <MainPageSearch />

      <MainPageHeader />
      <MyPageHeader />
      <div className="recentlycheckedpage">
        <div className="recentlycheckedpage-left">
          <MyPageSide />
        </div>
        <div className="recentlycheckedpage-right">
          <RecentlyChecked />
        </div>
      </div>
    </div>
  );
}

export default RecentlyCheckedPage;
