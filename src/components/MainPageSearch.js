import React, { useState, useEffect, useReducer } from "react";
import "./MainPageSearch.css";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";
import { rankingInitialValues, rankingReducer } from "../Redux";
// import { useDispatch } from "react-redux";
const delay = 4000;
function MainPageSearch() {
  const [ranking, setRanking] = useState(null);
  const [index, setIndex] = useState(0);
  const [searchedItem, setSearchedItem] = useState("");
  //   const [state, dispatch] = useReducer(rankingReducer, rankingInitialValues);

  //   const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://clothesapi.herokuapp.com/ranking")
        .then((response) => response.json())
        .then((result) => {
          //   console.log(result[0]["search"]["first"]);
          setRanking(result[0]["search"]["first"]);
        });
    };
    fetchData();
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

  //   useEffect(() => {
  //     console.log(ranking);
  //     dispatch({
  //       type: "ranking",
  //       payload: { ranking: ranking },
  //     });
  //   }, [ranking]);
  const search = (e) => {
    e.preventDefault();
    console.log(searchedItem);
    if (!sessionStorage.getItem("searchedItem")) {
      sessionStorage.setItem("searchedItem", JSON.stringify([searchedItem]));
    } else {
      const sessionData = JSON.parse(sessionStorage.getItem("searchedItem"));

      const dataArray = [...sessionData, searchedItem];
      const deduped = Array.from(new Set(dataArray));

      sessionStorage.setItem("searchedItem", JSON.stringify(deduped));
    }
  };
  return (
    <div className="mainpagesearch">
      <span>YongJu Store</span>

      <input
        type="text"
        placeholde="search"
        onChange={(e) => setSearchedItem(e.target.value)}
      />
      <PageviewSharpIcon className="searchIcon" onClick={search} />

      <div className="slideshow">
        {ranking !== null ? (
          <>
            <div className="slideshowSlider">
              <span>{index + 1}</span>{" "}
              <div className="slide">{ranking[index]}</div>
              {/* {index === ranking.length - 1 && setIndex(0)} */};
            </div>
          </>
        ) : (
          alert("loading")
        )}
      </div>
    </div>
  );
}

export default MainPageSearch;
