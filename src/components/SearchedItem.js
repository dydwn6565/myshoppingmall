import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import ClothesCard from "./main/ClothesCard";
import "./SearchedItem.css";
function SearchedItem() {
  const { state } = useLocation();

  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    const searchedItemData = async () => {
      const searchedData = await fetch(
        `https://clothes-api.vercel.app/api/items/searched?keyword=${state}`
      );
      if (searchedData.status === 200) {
        const response = await searchedData.json();
        setFilteredData(response);
        console.log(response);
      }
    };

    searchedItemData();
    // setFilteredData(searchedItemData);
  }, [state]);
  return (
    <div className="searchedItem">
      <h3>Searched Products</h3>
      <hr />

      <div className="medium_clfc_contents"></div>

      <div className="card_collection">
        <div className="card">
          {filteredData ? (
            filteredData.map((clothe, index) => <ClothesCard clothe={clothe} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchedItem;
