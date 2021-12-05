import React from "react";
import HeadAd from "./HeadAd";
import Header from "./Header";
import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
function Home() {
  return (
    <div>
      <HeadAd />
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
