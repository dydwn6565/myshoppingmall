import React, { useState, useEffect } from "react";
import "./ExtendedSearchBar.css";
import { Container, Col, Row } from "react-grid-system";
function ExtendedSearchBar() {
  const [searchedItemList, setSearchedItemList] = useState([]);
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
            {searchedItemList.map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <div>
            <div className="recently_searched">Ranking</div>
            <div>h2</div>
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
