import React, { useContext, useEffect, useState } from "react";
import HeadAd from "./HeadAd";
import Header from "./Header";
import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
import MainPageSearch from "./MainPageSearch";
import ExtendedSearchBar from "./ExtendedSearchBar";
import { ItemContext, RankContext, UserContext } from "../Context";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const { item, setItem } = useContext(ItemContext);

  useEffect(() => {
    const getItemList = async () => {
      await fetch("https://clothesapi.herokuapp.com/item")
        .then((response) => response.json())
        .then((result) => {
          setItem(result);
        });
    };
    getItemList();
  }, []);
  return (
    <div>
      <HeadAd />
      <MainPageSearch />
      <ExtendedSearchBar />
      <Header />
      <MainPageHeader />
      <MainPage />
      <Side />
      {/* <SidebarSearch />
      <SidebarItems />
      <CompanyContact /> */}
      {console.log(user)};{console.log(typeof user)};
    </div>
  );
}

export default Home;
