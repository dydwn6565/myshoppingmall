import React, { useContext, useEffect, useState } from "react";
import HeadAd from "./HeadAd";
import Header from "./Header";
import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
import MainPageSearch from "./MainPageSearch";

import {
  ItemContext,
  RankContext,
  SelectedItemContext,
  UserContext,
} from "../Context";
import FirstSlideShow from "./FirstSlideShow";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const { item, setItem } = useContext(ItemContext);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  useEffect(() => {
    const getItemList = async () => {
      await fetch(
        `https://clothesapi.herokuapp.com/${selectedItem["itemBigTitle"]}`
      )
        .then((response) => response.json())
        .then((result) => {
          setItem(result[selectedItem["target"]]);
        });
    };
    getItemList();
  }, [selectedItem]);
  return (
    <div>
      {/* {console.log(item)} */}
      {/* <FirstSlideShow /> */}
      <HeadAd />
      <MainPageSearch />

      <Header />
      <MainPageHeader />
      <MainPage />
      <Side />
      {/* <SidebarSearch />
      <SidebarItems />
      <CompanyContact /> */}
      {/* {console.log(user)};{console.log(typeof user)}; */}
    </div>
  );
}

export default Home;
