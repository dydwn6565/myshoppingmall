import React from "react";
import HeadAd from "./HeadAd";
import MainPageSearch from "./MainPageSearch";
import MyPageHeader from "./mypage/MyPageHeader";
import MyPageMain from "./mypage/MyPageMain";
import MyPageSide from "./mypage/MyPageSide";
import MainPageHeader from "./MainPageHeader";

function SearchedItemPage() {
  return (
    <div>
      <HeadAd />
      <MainPageSearch />

      <MainPageHeader />
      <MyPageHeader />

      <MyPageSide />

      <MyPageMain />
    </div>
  );
}

export default SearchedItemPage;
