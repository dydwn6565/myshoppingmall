import React, { useState, useEffect, useContext } from "react";
import "./MainPageSearch.css";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";

import { RankContext } from "../Context";
import ExtendedSearchBar from "./ExtendedSearchBar";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const delay = 4000;
function MainPageSearch() {
  const [ranking, setRanking] = useState(null);
  const [index, setIndex] = useState(0);
  const [searchedItem, setSearchedItem] = useState("");
  const { rank, setRank } = useContext(RankContext);
  const [extendbar, setExtendbar] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRankingData = async () => {
      await fetch("https://clothes-api.vercel.app/api/items/ranking")
        .then((response) => response.json())
        .then((result) => {
          console.log(result["2022/02/16"]);
          setRanking(result["2022/02/16"]);
          setRank(result["2022/02/16"]);
        });
    };
    fetchRankingData();
  }, []);
  useEffect(() => {
    const rankingCircle = () => {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === ranking?.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => clearTimeout(rankingCircle);
    };
    rankingCircle();
  }, [index]);

  const search = (e) => {
    e.preventDefault();
    console.log(searchedItem);
    if (e !== "") {
      if (!sessionStorage.getItem("searchedItem")) {
        sessionStorage.setItem("searchedItem", JSON.stringify([searchedItem]));
      } else {
        const sessionData = JSON.parse(sessionStorage.getItem("searchedItem"));

        const dataArray = [...sessionData, searchedItem];
        const deduped = Array.from(new Set(dataArray));

        sessionStorage.setItem("searchedItem", JSON.stringify(deduped));
      }
      navigate(`/searchedItempage/${searchItem}`, { state: searchItem });
    }
  };

  const extendSearchBar = () => {
    setExtendbar(true);
  };

  const removeExtendSearchBar = () => {
    setTimeout(() => {
      setExtendbar(false);
    }, 10000);
  };
  const moveToMain = () => {
    navigate("/");
  };
  return (
    <>
      <div className="mainpagesearch">
        <span onClick={moveToMain}>YongJu Store</span>

        <input
          type="text"
          placeholder="search"
          value={searchItem}
          onFocus={extendSearchBar}
          onBlur={removeExtendSearchBar}
          onChange={
            ((e) => setSearchedItem(e.target.value),
            (e) => setSearchItem(e.target.value))
          }
        />
        <PageviewSharpIcon className="searchIcon" onClick={search} />

        <div className="rankingslideshow">
          {ranking !== null ? (
            <>
              <div className="rankingslideshowSlider">
                <span>{index + 1}</span>{" "}
                <div className="rankingslide">{ranking[index]}</div>
                {/* {index === ranking.length - 1 && setIndex(0)} */};
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      {extendbar && <ExtendedSearchBar setSearchItem={setSearchItem} />}
    </>
  );
}

export default MainPageSearch;
