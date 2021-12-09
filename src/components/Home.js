import React from "react";
import HeadAd from "./HeadAd";
import Header from "./Header";
import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
import MainPageSearch from "./MainPageSearch";
import ExtendedSearchBar from "./ExtendedSearchBar";
function Home() {
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
    </div>
  );
}

export default Home;
