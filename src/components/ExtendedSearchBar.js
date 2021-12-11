import React, { useState, useEffect, useReducer, useContext } from "react";
import "./ExtendedSearchBar.css";
import { Container, Col, Row } from "react-grid-system";
import { RankContext } from "../Context";

function ExtendedSearchBar() {
  const [searchedItemList, setSearchedItemList] = useState([]);
  const { rank, setRank } = useContext(RankContext);
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

            {rank[0] === undefined
              ? alert("hi")
              : rank?.map((item) => (
                  <div>
                    <span>{rank.indexOf(item) + 1}</span> {item}
                  </div>
                ))}
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
