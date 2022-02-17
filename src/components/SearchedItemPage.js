import React from "react";
import HeadAd from "./HeadAd";
import MainPageSearch from "./MainPageSearch";

import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
import SearchedItem from "./SearchedItem";

function SearchedItemPage() {
  return (
    <div>
      <HeadAd />
      <MainPageSearch />
      <MainPageHeader />
      <SearchedItem />
      <Side />
    </div>
  );
}

export default SearchedItemPage;
