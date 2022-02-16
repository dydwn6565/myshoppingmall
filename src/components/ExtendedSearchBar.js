import React, { useState, useEffect, useContext } from "react";
import "./ExtendedSearchBar.css";
import { Container, Col, Row } from "react-grid-system";
import { RankContext } from "../Context";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ExtendedSearchBar() {
  const [searchedItemList, setSearchedItemList] = useState([]);
  const [searchedItemLCP, setSearchedItemLCP] = useState(0);
  const [rankingItemLCP, setRankingItem] = useState(0);
  const [recommendedItem, setRecommendedItem] = useState(null);
  const { rank, setRank } = useContext(RankContext);

  const searchedItemPrev = () => {
    if (searchedItemLCP !== 0) {
      setSearchedItemLCP((prev) => prev - 10);
    }
  };

  const searchedItemNext = () => {
    if (searchedItemList) {
      if (searchedItemList.length > searchedItemLCP + 10) {
        setSearchedItemLCP((prev) => prev + 10);
      }
    }
  };

  const rankingItemPrev = () => {
    if (rankingItemLCP !== 0) {
      setSearchedItemLCP((prev) => prev - 10);
    }
  };

  const rankingItemNext = () => {
    if (rankingItemLCP) {
      if (rank.length > rankingItemLCP + 10) {
        setSearchedItemLCP((prev) => prev + 10);
      }
    }
  };

  useEffect(() => {
    const sessionData = sessionStorage?.getItem("searchedItem");
    setSearchedItemList(JSON.parse(sessionData));
  }, []);

  useEffect(() => {
    const fetchRankingData = async () => {
      await fetch("https://clothes-api.vercel.app/api/items/recommend")
        .then((response) => response.json())
        .then((result) => {
          console.log(result["2022/02/16"]);

          setRecommendedItem(result["2022/02/16"]);
        });
    };
    fetchRankingData();
  }, []);
  return (
    <div className="extendedsearchbar">
      <Container>
        <Row>
          <div>
            <div className="recently_searched">
              <p>Searched list</p>
              <div className="recently_searched_button">
                <div className="arrow_back_icon" onClick={searchedItemPrev}>
                  <ArrowBackIosNewIcon />
                </div>
                <div className="arrow_forward_icon" onClick={searchedItemNext}>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>

            {searchedItemList?.map((item, keys) => {
              if (keys < searchedItemLCP + 10 && keys > searchedItemLCP) {
                return <div className="searched_rank">{item}</div>;
              }
            })}
          </div>
          <div>
            <div className="recently_searched">
              <p>Ranking</p>
              <div className="recently_searched_button">
                <div className="arrow_back_icon" onClick={rankingItemPrev}>
                  <ArrowBackIosNewIcon />
                </div>
                <div className="arrow_forward_icon" onClick={rankingItemNext}>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>

            {rank[0] === undefined
              ? alert("hi")
              : rank?.map((item, keys) => {
                  if (keys < rankingItemLCP + 10 && keys > rankingItemLCP) {
                    return <div className="searched_rank">{item}</div>;
                  }
                  <div className="searched_rank">
                    <span>{rank.indexOf(item) + 1}</span> {item}
                  </div>;
                })}
          </div>
          <div>
            <div className="recently_searched ">
              <p>Recommend items</p>
              <div className="recently_searched_button recommend_item">
                <div className="arrow_back_icon">
                  <ArrowBackIosNewIcon />
                </div>
                <div className="arrow_forward_icon">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            {recommendedItem?.map((item, keys) => {
              if (keys < searchedItemLCP + 10 && keys > searchedItemLCP) {
                return <div className="searched_rank">{item}</div>;
              }
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ExtendedSearchBar;
