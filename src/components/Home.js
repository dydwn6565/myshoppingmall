import React, { useContext } from "react";
import HeadAd from "./HeadAd";
import Header from "./Header";
import MainPageHeader from "./MainPageHeader";
import MainPage from "./main/MainPage";
import Side from "./Side";
import MainPageSearch from "./MainPageSearch";
import ExtendedSearchBar from "./ExtendedSearchBar";
import { UserContext } from "../Context";

function Home() {
  const { user, setUser } = useContext(UserContext);
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
