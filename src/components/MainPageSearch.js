import React, { useState, useEffect } from "react";
import "./MainPageSearch.css";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";

const delay = 4000;
function MainPageSearch() {
  const [ranking, setRanking] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://clothesapi.herokuapp.com/ranking")
        .then((response) => response.json())
        .then((result) => {
          console.log(result[0]["search"]["first"]);
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

  const search = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mainpagesearch">
      <span>YongJu Store</span>
      <input type="text" placeholde="search" />
      <PageviewSharpIcon className="searchIcon" onClick={search} />
      <div className="slideshow">
        {ranking !== null ? (
          <>
            <div className="slideshowSlider">
              <span>{index + 1}</span>{" "}
              <div className="slide">{ranking[index]}</div>
              {/* {index === ranking.length - 1 && setIndex(0)} */}
            </div>
          </>
        ) : (
          alert("loading")
        )}
        {/* {console.log(delay)} */}
      </div>
      {/* {rankingCircle()} */}
    </div>
  );
}

export default MainPageSearch;
