import React, { useState, useEffect, useContext } from "react";
import "./ExtendedSearchBar.css";
import { Container, Row } from "react-grid-system";
import { RankContext } from "../Context";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ExtendedSearchBar({ setSearchItem }) {
  const [searchedItemList, setSearchedItemList] = useState([]);
  const [searchedItemLCP, setSearchedItemLCP] = useState(0);
  const [rankingItemLCP, setRankingItemLCP] = useState(0);
  const [recommendedItemLCP, setRecommendedItemLCP] = useState(0);
  const [recommendedItem, setRecommendedItem] = useState(null);
  const { rank } = useContext(RankContext);

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
      setRankingItemLCP((prev) => prev - 10);
    }
  };

  const rankingItemNext = () => {
    if (rank) {
      if (rank.length > rankingItemLCP + 10) {
        setRankingItemLCP((prev) => prev + 10);
      }
    }
  };

  const recommendedItemPrev = () => {
    if (recommendedItemLCP !== 0) {
      setRecommendedItemLCP((prev) => prev - 10);
    }
  };

  const recommendedItemNext = () => {
    if (recommendedItem) {
      if (recommendedItem.length > recommendedItemLCP + 10) {
        setRecommendedItemLCP((prev) => prev + 10);
      }
    }
  };

  useEffect(() => {
    const localData = localStorage?.getItem("searchItem");
    setSearchedItemList(JSON.parse(localData));
  }, []);

  useEffect(() => {
    try {
      const fetchRankingData = async () => {
        await fetch("https://clothes-api.vercel.app/api/items/recommend")
          .then((response) => response.json())
          .then((result) => {
            console.log(result["2022/02/16"]);

            setRecommendedItem(result["2022/02/16"]);
          })
          .catch((error) => alert(error));
      };
      fetchRankingData();
    } catch (error) {
      console.log(error);
    }
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

            {searchedItemList?.map((item, key) => {
              if (key < searchedItemLCP + 10 && key >= searchedItemLCP) {
                return (
                  <div
                    className="searched_item_list"
                    onClick={() => setSearchItem(searchedItemList[key])}
                  >
                    {item}
                  </div>
                );
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
              ? ""
              : rank?.map((item, key) => {
                  if (key < rankingItemLCP + 10 && key >= rankingItemLCP) {
                    return (
                      <>
                        <div
                          className="searched_rank"
                          onClick={() => setSearchItem(rank[key])}
                        >
                          <span className="extended_search_bar_numbering">
                            {key + 1}
                          </span>{" "}
                          {item}
                        </div>
                      </>
                    );
                  }
                })}
          </div>
          <div>
            <div className="recently_searched ">
              <p>Recommend items</p>
              <div className="recently_searched_button recommend_item">
                <div className="arrow_back_icon" onClick={recommendedItemPrev}>
                  <ArrowBackIosNewIcon />
                </div>
                <div
                  className="arrow_forward_icon"
                  onClick={recommendedItemNext}
                >
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            {recommendedItem?.map((item, key) => {
              if (key < recommendedItemLCP + 10 && key >= recommendedItemLCP) {
                return (
                  <div
                    className="recommended_item"
                    onClick={(e) => setSearchItem(recommendedItem[key])}
                  >
                    <span className="extended_search_bar_numbering">
                      {key + 1}
                    </span>{" "}
                    {item}
                  </div>
                );
              }
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ExtendedSearchBar;
