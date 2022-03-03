import React, { useState, useEffect, useContext } from "react";
import "./MainPageSearch.css";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";

import { RankContext } from "../Context";
import ExtendedSearchBar from "./ExtendedSearchBar";
import { useNavigate } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const delay = 4000;
function MainPageSearch() {
  const [ranking, setRanking] = useState(null);
  const [index, setIndex] = useState(0);
  // const [searchedItem, setSearchedItem] = useState("");
  const { setRank } = useContext(RankContext);
  const [extendbar, setExtendbar] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchRankingData = async () => {
        await fetch("https://clothes-api.vercel.app/api/items/ranking")
          .then((response) => response.json())
          .then((result) => {
            console.log(result["2022/02/16"]);
            setRanking(result["2022/02/16"]);
            setRank(result["2022/02/16"]);
          })
          .catch((error) => {
            alert(error.message);
          });
      };
      fetchRankingData();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
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

    if (e !== "") {
      if (!localStorage.getItem("searchItem")) {
        localStorage.setItem("searchItem", JSON.stringify([searchItem]));
      } else {
        const localStorageData = JSON.parse(localStorage.getItem("searchItem"));

        const dataArray = [...localStorageData, searchItem];
        const deduped = Array.from(new Set(dataArray));

        localStorage.setItem("searchItem", JSON.stringify(deduped));
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
    }, 15000);
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
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <PageviewSharpIcon className="searchIcon" onClick={search} />
        <div className="rankingslideshow">
          {ranking !== null ? (
            <>
              <div className="rankingslideshowSlider">
                <span>{index + 1}</span>{" "}
                <div className="rankingslide">
                  {ranking[index]}

                  <ArrowDropUpIcon className="arrow_drow_sgv" />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {extendbar && <ExtendedSearchBar setSearchItem={setSearchItem} />}
    </>
  );
}

export default MainPageSearch;
