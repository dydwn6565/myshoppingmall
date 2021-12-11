import React, { useState, useEffect, useReducer } from "react";
import "./ExtendedSearchBar.css";
import { Container, Col, Row } from "react-grid-system";
// import { rankingInitialValues, rankingReducer } from "../Redux";
// import { useSelector } from "react-redux";
function ExtendedSearchBar() {
  const [searchedItemList, setSearchedItemList] = useState([]);
  // const [state, dispatch] = useReducer(rankingReducer, rankingInitialValues);
  // const rankingData = useSelector((state) => state.ranking);
  useEffect(() => {
    const sessionData = sessionStorage?.getItem("searchedItem");
    setSearchedItemList(JSON.parse(sessionData));
  }, []);
  return (
    <div className="extendedsearchbar">
      <Container>
        <Row>
          <div>
            <div className="recently_searched">Searched list</div>
            {searchedItemList?.map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <div>
            <div className="recently_searched">Ranking</div>
            {/* <div>{console.log(dispatch({ type: "ranking_items" }))}</div> */}
            {/* {state !== undefined
              ? console.log("mainpage:", state?.ranking)
              : console.log("hi")} */}
            <div>h2</div>
            <div>h2</div>
          </div>
          <div>
            <div className="recently_searched">Recommend</div>
            <div>h3</div>
            <div>h3</div>
            <div>h3</div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ExtendedSearchBar;
