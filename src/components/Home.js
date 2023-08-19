import React, { useContext, useEffect } from "react";
import HeadAd from "./HeadAd";
import "./Home.css"
import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
import MainPageSearch from "./MainPageSearch";

import { ItemContext, SelectedItemContext } from "../Context";

function Home() {
  const { setItem } = useContext(ItemContext);
  const { selectedItem } = useContext(SelectedItemContext);
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
      {/* <HeadAd /> */}
      <MainPageSearch />

      <MainPageHeader />
      <div className="main-side-and-main-card">
        <Side />
        <MainPage />
      </div>
    </div>
  );
}

export default Home;
