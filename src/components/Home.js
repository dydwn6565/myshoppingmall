import React, { useContext, useEffect, useState } from "react";
import HeadAd from "./HeadAd";
import Header from "./Header";
import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
import MainPageSearch from "./MainPageSearch";

import {
  ItemContext,
  // RankContext,
  SelectedItemContext,
  UserContext,
} from "../Context";
// import FirstSlideShow from "./FirstSlideShow";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const { item, setItem } = useContext(ItemContext);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  useEffect(() => {
    const getItemList = async () => {
      const data = await fetch(
        `https://clothes-api.vercel.app/api/items/${selectedItem["itemBigTitle"]}`
      );

      if (data.status === 200) {
        const response = await data.json();

        setItem(response[selectedItem["target"]]);
      }
    };
    getItemList();
  }, [selectedItem]);

  return (
    <div>
      <HeadAd />
      <MainPageSearch />

      <Header />
      <MainPageHeader />
      <MainPage />
      <Side />
    </div>
  );
}

export default Home;
