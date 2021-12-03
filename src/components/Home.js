import React from "react";
import HeadAd from "./HeadAd";
import Header from "./Header";
import MyPageHeader from "./MyPageHeader";
import SidebarSearch from "./sidebarsearch/SidebarSearch";
import SidebarItems from "./sidebarsearch/SidebarItems";
function Home() {
  return (
    <div>
      <HeadAd />
      <Header />
      <MyPageHeader />
      <SidebarSearch />
      <SidebarItems />
    </div>
  );
}

export default Home;
